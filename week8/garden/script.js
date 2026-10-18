// Adapted from week8/draft01: pointer position + Math.hypot distance.
// This supplied illustration has no geographic metadata. UC and scale are
// visually calibrated approximations, not routing or GPS measurements.
const UC = { x: 210, y: 306 };
const UNITS_PER_KM = 29;
const map = document.getElementById('map');
const ns = 'http://www.w3.org/2000/svg';
let selected = { x: UC.x + UNITS_PER_KM, y: UC.y };
let currentKm = 1;
let planted = 0;
const previousByBand = new Map();
function svgNode(name, attributes) {
  const node = document.createElementNS(ns, name);
  Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
  return node;
}
[1, 3, 5, 10].forEach(km => {
  document.getElementById('rings').append(svgNode('circle', { cx: UC.x, cy: UC.y, r: km * UNITS_PER_KM }));
});
function plant(point, exactKm) {
  selected = point;
  currentKm = exactKm ?? Math.hypot(point.x - UC.x, point.y - UC.y) / UNITS_PER_KM;
  // Nearest whole-km band: 1 km = elevator; 3 km = bus; 10+ = long journey.
  const bandIndex = Math.min(9, Math.max(0, Math.round(currentKm) - 1));
  const band = excuseBands[bandIndex];
  let itemIndex = Math.floor(Math.random() * band.items.length);
  if (itemIndex === previousByBand.get(bandIndex)) itemIndex = (itemIndex + 1) % band.items.length;
  previousByBand.set(bandIndex, itemIndex);
  const number = String(bandIndex * 10 + itemIndex + 1).padStart(3, '0');
  document.getElementById('distance').textContent = currentKm.toFixed(1);
  document.getElementById('category').textContent = band.label;
  document.getElementById('excuse').textContent = band.items[itemIndex];
  document.getElementById('number').textContent = `${number} / 100`;
  document.getElementById('ticket').textContent = number;
  document.getElementById('hint').textContent = currentKm < .1 ? 'You made it to school. Just a little farther to class!' : `About ${currentKm.toFixed(1)} km from UC. More distance, more excuses.`;
  document.getElementById('route').setAttribute('d', `M ${UC.x} ${UC.y} L ${point.x} ${point.y}`);
  const pin = svgNode('g', { transform: `translate(${point.x} ${point.y})` });
  const marker = svgNode('g', { class: 'location-pin' });
  const colors = ['#e87556', '#e9aecc', '#ead364', '#f5f2e9', '#bbc777'];
  // The tip sits exactly on the selected map location.
  marker.append(svgNode('path', {
    d: 'M 0 0 C -2 -4 -8 -9 -8 -15 A 8 8 0 1 1 8 -15 C 8 -9 2 -4 0 0 Z',
    fill: colors[bandIndex % colors.length],
    stroke: '#293c32',
    'stroke-width': 1
  }));
  marker.append(svgNode('circle', { cx: 0, cy: -15, r: 2.8, fill: '#293c32' }));
  pin.append(marker);
  const title = svgNode('title', {});
  title.textContent = `${currentKm.toFixed(1)} km — ${band.items[itemIndex]}`;
  pin.append(title);
  const flowers = document.getElementById('flowers');
  flowers.append(pin);
  // Bound SVG growth on long sessions while keeping the total planted count.
  if (flowers.children.length > 200) flowers.firstElementChild.remove();
  planted++;
  document.getElementById('count').textContent = String(planted).padStart(2, '0');
}
map.addEventListener('click', event => {
  if (event.target.closest('button')) return;
  const rect = map.getBoundingClientRect();
  plant({ x: (event.clientX - rect.left) / rect.width * 550, y: (event.clientY - rect.top) / rect.height * 450 });
});
document.getElementById('uc').addEventListener('click', () => plant({ ...UC }, 0));
document.getElementById('another').addEventListener('click', () => plant(selected, currentKm));
document.querySelectorAll('[data-km]').forEach(button => button.addEventListener('click', () => {
  const km = Number(button.dataset.km);
  // A north-east bearing keeps every preset, including 10 km, on the map.
  plant({ x: UC.x + km * UNITS_PER_KM * .35, y: UC.y - km * UNITS_PER_KM * Math.sqrt(1 - .35 ** 2) }, km);
}));
document.getElementById('reset').addEventListener('click', () => {
  document.getElementById('flowers').replaceChildren();
  document.getElementById('route').setAttribute('d', '');
  planted = 0;
  document.getElementById('count').textContent = '00';
  document.getElementById('hint').textContent = 'Garden cleared. Plant a fresh excuse.';
});
