import * as THREE from './vendor/three.module.js';

const RADIUS = 2;
const colorFor = (mag) => mag >= 5 ? 0xff5e69 : mag >= 2.5 ? 0xffb16c : 0x7ac5ff;
const HEAT_STOPS = [[-10, '#6783ff'], [0, '#6ed8ef'], [15, '#f7cf70'], [25, '#ff884a'], [40, '#f0444f']];
const heatColor = temp => {
  for (let i = 1; i < HEAT_STOPS.length; i++) {
    if (temp <= HEAT_STOPS[i][0]) return new THREE.Color(HEAT_STOPS[i - 1][1]).lerp(new THREE.Color(HEAT_STOPS[i][1]), THREE.MathUtils.clamp((temp - HEAT_STOPS[i - 1][0]) / (HEAT_STOPS[i][0] - HEAT_STOPS[i - 1][0]), 0, 1));
  }
  return new THREE.Color(HEAT_STOPS.at(-1)[1]);
};
export function latLonVector(longitude, latitude, radius = RADIUS) {
  const lon = THREE.MathUtils.degToRad(longitude);
  const lat = THREE.MathUtils.degToRad(latitude);
  return new THREE.Vector3(Math.cos(lat) * Math.cos(lon), Math.sin(lat), -Math.cos(lat) * Math.sin(lon)).multiplyScalar(radius);
}

export function createGlobe(container, onSelect, onRotationChange) {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.z = 6.9;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0x03070e, 0);
  container.append(renderer.domElement);
  const earth = new THREE.Group();
  scene.add(earth);
  earth.rotation.y = THREE.MathUtils.degToRad(160);
  const target = new THREE.Quaternion();
  const geometry = new THREE.SphereGeometry(RADIUS, 96, 64);
  const material = new THREE.MeshPhongMaterial({ color: 0xb3c9df, shininess: 9, specular: 0x1c354d });
  const surface = new THREE.Mesh(geometry, material);
  earth.add(surface);
  new THREE.TextureLoader().load('./assets/earth.jpg', (texture) => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
    material.map = texture;
    material.needsUpdate = true;
  }, undefined, () => {
    document.getElementById('globe-message').hidden = false;
    document.getElementById('globe-message').textContent = 'Earth texture unavailable. Geographic sample positions are still accurate.';
  });
  scene.add(new THREE.AmbientLight(0x9bbce3, 1.3));
  const sunlight = new THREE.DirectionalLight(0xc8e6ff, 2.8);
  sunlight.position.set(-4, 3, 5);
  scene.add(sunlight);
  const rimLight = new THREE.DirectionalLight(0x285fbd, 2);
  rimLight.position.set(4, -1, -3);
  scene.add(rimLight);

  // A thin atmospheric shell, brightest when viewed along the horizon.
  const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(RADIUS * 1.035, 64, 48), new THREE.ShaderMaterial({
    vertexShader: 'varying vec3 vNormal; varying vec3 vView; void main(){ vec4 p=modelViewMatrix*vec4(position,1.0); vNormal=normalize(normalMatrix*normal); vView=normalize(-p.xyz); gl_Position=projectionMatrix*p; }',
    fragmentShader: 'varying vec3 vNormal; varying vec3 vView; void main(){ float rim=pow(1.0-abs(dot(normalize(vNormal),normalize(vView))),3.5); gl_FragColor=vec4(0.17,0.49,0.92,rim*0.65); }',
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
  }));
  earth.add(atmosphere);

  // Subtle latitude / longitude lines sit on the geographic sphere.
  const gridMaterial = new THREE.LineBasicMaterial({ color: 0x81b6dd, transparent: true, opacity: 0.075 });
  for (let latitude = -60; latitude <= 60; latitude += 30) {
    const positions = [];
    for (let longitude = -180; longitude <= 180; longitude += 3) positions.push(latLonVector(longitude, latitude, RADIUS * 1.001));
    earth.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(positions), gridMaterial));
  }
  for (let longitude = -180; longitude < 180; longitude += 30) {
    const positions = [];
    for (let latitude = -90; latitude <= 90; latitude += 3) positions.push(latLonVector(longitude, latitude, RADIUS * 1.001));
    earth.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(positions), gridMaterial));
  }
  // Deterministic star positions keep the backdrop quiet and consistent.
  const starPositions = [];
  for (let i = 0; i < 650; i++) {
    const x = Math.sin(i * 127.1 + 17) * 18;
    const y = Math.sin(i * 311.7 + 53) * 12;
    starPositions.push(x, y, -9 - (i % 11));
  }
  const stars = new THREE.BufferGeometry();
  stars.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
  scene.add(new THREE.Points(stars, new THREE.PointsMaterial({ color: 0x6c91b2, size: 0.018, transparent: true, opacity: 0.55, sizeAttenuation: true })));

  // Local symbolic halos on a spherical texture; unsampled areas stay transparent.
  const weatherCanvas = document.createElement('canvas');
  weatherCanvas.width = 1024; weatherCanvas.height = 512;
  const weatherContext = weatherCanvas.getContext('2d');
  const weatherTexture = new THREE.CanvasTexture(weatherCanvas);
  weatherTexture.colorSpace = THREE.SRGBColorSpace;
  const weatherMaterial = new THREE.MeshBasicMaterial({ map: weatherTexture, transparent: true, opacity: 0, depthWrite: false });
  const weatherShell = new THREE.Mesh(new THREE.SphereGeometry(RADIUS * 1.003, 96, 64), weatherMaterial);
  earth.add(weatherShell);
  let mode = 'temperature';
  let weatherOpacity = 0;
  function paintWeather(items, layer) {
    weatherContext.clearRect(0, 0, 1024, 512);
    weatherShell.visible = layer !== 'seismic';
    if (layer === 'seismic') return;
    for (const item of items) {
      if (layer === 'precipitation' && item.precipitation <= 0) continue;
      const color = layer === 'temperature' ? heatColor(item.temperature) : new THREE.Color(0x3bbdff);
      const srgb = color.clone().convertLinearToSRGB();
      const rgb = `${Math.round(srgb.r * 255)},${Math.round(srgb.g * 255)},${Math.round(srgb.b * 255)}`;
      const strength = layer === 'temperature' ? 0.68 : Math.min(0.85, 0.25 + item.precipitation * 0.3);
      const x = (item.longitude + 180) / 360 * 1024;
      const y = (90 - item.latitude) / 180 * 512;
      const ry = 10 / 180 * 512;
      const rx = ry / Math.max(0.3, Math.cos(THREE.MathUtils.degToRad(item.latitude)));
      for (const wrap of [-1024, 0, 1024]) {
        weatherContext.save();weatherContext.translate(x + wrap, y);weatherContext.scale(rx, ry);
        const gradient = weatherContext.createRadialGradient(0, 0, 0, 0, 0, 1);
        gradient.addColorStop(0, `rgba(${rgb},${strength})`);
        gradient.addColorStop(0.35, `rgba(${rgb},${strength * 0.7})`);
        gradient.addColorStop(1, `rgba(${rgb},0)`);
        weatherContext.fillStyle = gradient;weatherContext.fillRect(-1, -1, 2, 2);weatherContext.restore();
      }
    }
    weatherTexture.needsUpdate = true;
    weatherOpacity = 0;
  }

  const markers = new THREE.Group();
  earth.add(markers);
  const dotGeometry = new THREE.SphereGeometry(1, 10, 8);
  const ringGeometry = new THREE.RingGeometry(0.82, 1, 48);
  let selected = null;
  let entries = [];
  let autoRotate = !reducedMotion;
  let drag = null;
  let focused = false;
  let lastTime = 0;
  let animation;
  let zoomTarget = camera.position.z;
  const axisY = new THREE.Vector3(0, 1, 0);
  const axisX = new THREE.Vector3(1, 0, 0);
  const rotation = new THREE.Quaternion();
  const world = new THREE.Vector3();

  function setRotation(value) {
    autoRotate = value;
    onRotationChange(value);
  }
  function setData(items, layer) {
    mode = layer;
    paintWeather(items, layer);
    for (const entry of entries) {
      entry.dot.material.dispose();entry.ring.material.dispose();entry.halo.material.dispose();
      if (entry.rain) { entry.rain.geometry.dispose();entry.rain.material.dispose(); }
    }
    markers.clear();
    entries = items.map((item, index) => {
      const group = new THREE.Group();
      const normal = latLonVector(item.longitude, item.latitude).normalize();
      group.position.copy(normal).multiplyScalar(RADIUS * 1.006);
      group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
      const color = layer === 'seismic' ? colorFor(item.mag) : layer === 'temperature' ? heatColor(item.temperature) : item.precipitation > 0 ? 0x78d8ff : 0x435466;
      const size = layer === 'seismic' ? 0.011 + Math.max(0, item.mag) * 0.003 : layer === 'temperature' ? 0.019 : 0.014 + Math.min(item.precipitation, 5) * 0.004;
      const dot = new THREE.Mesh(dotGeometry, new THREE.MeshBasicMaterial({ color }));
      dot.scale.setScalar(size);dot.userData.id = item.id;
      const ring = new THREE.Mesh(ringGeometry, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.6, side: THREE.DoubleSide, depthWrite: false }));
      ring.position.z = 0.009;
      const halo = new THREE.Mesh(ringGeometry, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.18, side: THREE.DoubleSide, depthWrite: false }));
      halo.position.z = 0.006;halo.scale.setScalar(size * 3.5);
      group.add(dot, ring, halo);
      let rain = null;
      let drops = 0;
      if (layer === 'precipitation' && item.precipitation > 0) {
        // Falling strokes are a symbol; amount controls density, not storm extent.
        drops = Math.min(24, 3 + Math.ceil(item.precipitation / item.interval * 3600 * 3));
        const rainGeometry = new THREE.BufferGeometry();
        rainGeometry.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(drops * 6), 3));
        rain = new THREE.LineSegments(rainGeometry, new THREE.LineBasicMaterial({color: 0x9ce7ff, transparent: true, opacity: 0.75}));
        group.add(rain);
      }
      markers.add(group);
      return { ...item, dot, ring, halo, group, rain, drops, size, phase: index * 0.618 % 1 };
    });
  }
  function setEvents(events) {
    setData(events.map(event => ({ id: event.id, longitude: event.geometry.coordinates[0], latitude: event.geometry.coordinates[1], mag: event.properties.mag })), 'seismic');
  }
  function setWeather(samples, layer) { setData(samples, layer); }
  function select(id, focus) {
    selected = id;
    if (focus) {
      const entry = entries.find((item) => item.id === id);
      if (!entry) return;
      const lon = entry.longitude; const lat = entry.latitude;
      target.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(lat), -Math.PI / 2 - THREE.MathUtils.degToRad(lon), 0, 'XYZ'));
      focused = true;
      setRotation(false);
    }
  }
  function resize() {
    const { width, height } = container.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    // Fit the entire Earth on narrow displays, leaving room above for the title.
    camera.fov = width < 760 ? 50 : 42;
    if (width < 760) {
      const fitDistance = RADIUS / Math.sin(THREE.MathUtils.degToRad(camera.fov / 2)) / Math.min(camera.aspect, 1) * 1.12;
      camera.position.z = Math.max(6.9, fitDistance);
      zoomTarget = camera.position.z;
      camera.setViewOffset(width, height, 0, -height * 0.105, width, height);
    } else {
      camera.clearViewOffset();
      camera.position.z = 6.9;
      zoomTarget = 6.9;
    }
    camera.updateProjectionMatrix();
  }
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  function zoom(direction) { zoomTarget = THREE.MathUtils.clamp(zoomTarget + direction * 0.65, 5.1, 13); }
  renderer.domElement.addEventListener('wheel', (event) => {
    event.preventDefault();
    zoom(Math.sign(event.deltaY));
  }, { passive: false });
  renderer.domElement.addEventListener('pointerdown', (event) => {
    if (event.button !== 0 || drag) return;
    drag = { id: event.pointerId, x: event.clientX, y: event.clientY, startX: event.clientX, startY: event.clientY, moved: false };
    renderer.domElement.setPointerCapture(event.pointerId);
  });
  renderer.domElement.addEventListener('pointermove', (event) => {
    if (!drag || drag.id !== event.pointerId) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    if (Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) > 4) drag.moved = true;
    if (drag.moved) {
      focused = false;
      setRotation(false);
      earth.quaternion.premultiply(rotation.setFromAxisAngle(axisY, dx * 0.004));
      earth.quaternion.premultiply(rotation.setFromAxisAngle(axisX, dy * 0.004));
    }
    drag.x = event.clientX;
    drag.y = event.clientY;
  });
  renderer.domElement.addEventListener('pointerup', (event) => {
    if (!drag || drag.id !== event.pointerId) return;
    const clicked = !drag.moved;
    drag = null;
    if (!clicked) return;
    const rect = renderer.domElement.getBoundingClientRect();
    // Compare projected locations for forgiving hit targets, and reject the far side.
    let nearest = null;
    let distance = 22;
    earth.updateMatrixWorld(true);
    for (const entry of entries) {
      entry.dot.getWorldPosition(world);
      if (world.dot(camera.position.clone().sub(world)) <= 0) continue;
      const projected = world.clone().project(camera);
      const x = (projected.x + 1) / 2 * rect.width;
      const y = (1 - projected.y) / 2 * rect.height;
      const delta = Math.hypot(x - (event.clientX - rect.left), y - (event.clientY - rect.top));
      if (delta < distance) { distance = delta; nearest = entry; }
    }
    if (nearest) onSelect(nearest.id);
  });
  function cancelDrag() { drag = null; }
  renderer.domElement.addEventListener('pointercancel', cancelDrag);
  renderer.domElement.addEventListener('lostpointercapture', cancelDrag);
  renderer.domElement.addEventListener('webglcontextlost', (event) => {
    event.preventDefault();
    cancelAnimationFrame(animation);
    const message = document.getElementById('globe-message');
    message.hidden = false;
    message.textContent = 'The 3D view was interrupted. Reload to restore it; event records remain available below.';
  });
  function frame(time) {
    animation = requestAnimationFrame(frame);
    const delta = Math.min(time - lastTime, 50);
    lastTime = time;
    if (document.hidden) return;
    if (focused) {
      if (reducedMotion) earth.quaternion.copy(target);
      else earth.quaternion.slerp(target, 1 - Math.exp(-delta * 0.004));
      if (earth.quaternion.angleTo(target) < 0.001) focused = false;
    } else if (autoRotate && !drag) earth.quaternion.premultiply(rotation.setFromAxisAngle(axisY, delta * 0.000025));
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, zoomTarget, reducedMotion ? 1 : 0.12);
    weatherOpacity = THREE.MathUtils.lerp(weatherOpacity, 0.95, reducedMotion ? 1 : 0.06);
    weatherMaterial.opacity = weatherOpacity;
    for (const entry of entries) {
      const isSelected = entry.id === selected;
      const progress = reducedMotion ? 0.35 : (time * 0.00028 + entry.phase) % 1;
      entry.ring.scale.setScalar(entry.size * (2 + progress * (isSelected ? 12 : 7)));
      entry.ring.material.opacity = mode === 'temperature' ? (isSelected ? 0.65 : 0.16) : mode === 'precipitation' && entry.precipitation === 0 ? 0 : (1 - progress) * (isSelected ? 0.9 : 0.55);
      entry.dot.scale.setScalar(entry.size * (isSelected ? 1.8 : 1));
      entry.halo.material.opacity = isSelected ? 0.65 : 0.16;
      if (entry.rain) {
        const positions = entry.rain.geometry.attributes.position;
        for (let i = 0; i < entry.drops; i++) {
          const x = Math.sin(i * 127.1 + entry.phase) * 0.085;
          const y = Math.cos(i * 311.7 + entry.phase) * 0.085;
          const height = 0.02 + (reducedMotion ? (i * 0.318 % 1) : (1 - (time * 0.00045 + i * 0.318 + entry.phase) % 1)) * 0.23;
          positions.setXYZ(i * 2, x, y, height);
          positions.setXYZ(i * 2 + 1, x, y, height + 0.027);
        }
        positions.needsUpdate = true;
      }
    }
    renderer.render(scene, camera);
  }
  resize();
  onRotationChange(autoRotate);
  animation = requestAnimationFrame(frame);
  return {
    setEvents, setWeather, select, zoom, setRotation,
    reset() { target.identity(); focused = true; zoomTarget = container.clientWidth < 760 ? RADIUS / Math.sin(THREE.MathUtils.degToRad(25)) / Math.min(camera.aspect, 1) * 1.12 : 6.9; setRotation(!reducedMotion); },
  };
}
