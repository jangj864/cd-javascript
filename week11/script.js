import { OZONE_SNAPSHOT, ozoneURLs, mergeOzone } from './ozone.js';
import { SITES, weatherURL, parseWeather } from './weather.js';

const FEED_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
const $ = id => document.getElementById(id);
const WEATHER_INTERVAL = 15 * 60 * 1000;
const makeFeed = () => ({ items: [], selected: null, updated: null, loading: false, error: '', previous: new Map() });
const state = { layer: 'temperature', paused: false, weather: makeFeed(), seismic: makeFeed(), filters: { temperature: -30, precipitation: 0, seismic: 0 } };
const ozone = { data: OZONE_SNAPSHOT, snapshot: true, loading: false, checked: null, error: '' };
let globe = null;
let rotating = !matchMedia('(prefers-reduced-motion: reduce)').matches;
const currentFeed = () => state.layer === 'seismic' ? state.seismic : state.weather;
const utcTime = time => new Date(time).toLocaleTimeString('en-GB', { timeZone: 'UTC', hour12: false });
const formatDate = time => new Date(time).toLocaleString('en-GB', { timeZone: 'UTC', dateStyle: 'medium', timeStyle: 'short' }) + ' UTC';
const duration = seconds => `${seconds / 60} MIN`;
const quakeName = event => event.properties.place || 'Unnamed seismic region';
const weatherValue = item => state.layer === 'temperature' ? item.temperature : item.precipitation;
const temperatureColor = temp => temp >= 35 ? '#ff4c51' : temp >= 25 ? '#ff8c58' : temp >= 15 ? '#ffc77d' : temp >= 0 ? '#7bcdf4' : '#8397ff';
function visibleItems() {
 const items = currentFeed().items;
 const min = state.filters[state.layer];
 if (state.layer === 'seismic') return items.filter(item => min === 0 || item.properties.mag >= min);
 return items.filter(item => min === (state.layer === 'temperature' ? -30 : 0) || weatherValue(item) >= min)
  .sort((a, b) => weatherValue(b) - weatherValue(a));
}
function updateStatus() {
 if (state.layer === 'ozone') { updateOzoneStatus();return; }
 const feed = currentFeed();
 $('connection').textContent = feed.loading ? 'SYNCHRONIZING' : feed.error ? 'DATA DELAYED' : state.paused ? 'UPDATES PAUSED' : feed.updated ? 'RECEIVING LIVE DATA' : 'AWAITING DATA';
 $('refresh').disabled = feed.loading;
 $('synced').textContent = feed.updated ? `FETCHED ${utcTime(feed.updated)} UTC` : 'AWAITING DATA';
 $('sync-cycle').textContent = state.layer === 'seismic' ? '/ 60 SEC SYNC' : '/ 15 MIN SYNC';
 if (feed.error) $('status').textContent = feed.error;
 else if (!feed.updated) $('status').textContent = state.layer === 'seismic' ? 'Connecting to USGS…' : 'Connecting to Open-Meteo…';
 else {
  const count = visibleItems().length;
  $('status').textContent = count ? state.layer === 'seismic' ? `${count} events / past 24 hours${state.paused ? ' · Paused' : ''}` : `${count} / ${SITES.length} samples · ${state.layer === 'temperature' ? 'Hottest' : 'Wettest'} first${state.paused ? ' · Paused' : ''}` : 'No results. Lower the filter to see more.';
 }
}
function selectItem(id, focus = false) {
 if (state.layer === 'ozone') { if (focus) openWidget('details');return; }
 const feed = currentFeed();
 const item = feed.items.find(entry => entry.id === id);
 if (!item) return;
 feed.selected = id;
 document.querySelectorAll('[data-event]').forEach(row => {
  row.classList.toggle('selected', row.dataset.event === id);
  row.setAttribute('aria-pressed', String(row.dataset.event === id));
 });
 globe?.select(id, focus);
 const seismic = state.layer === 'seismic';
 const [lon, lat, depth] = seismic ? item.geometry.coordinates : [item.longitude, item.latitude];
 $('detail-label').textContent = seismic ? 'SELECTED EPICENTER' : 'SELECTED CITY SAMPLE';
 $('detail-mag').textContent = (seismic ? item.properties.mag : weatherValue(item)).toFixed(1);
 $('detail-mag').style.color = seismic ? '#fff1e5' : state.layer === 'temperature' ? temperatureColor(item.temperature) : '#78d8ff';
 $('detail-unit').textContent = seismic ? 'MAGNITUDE' : state.layer === 'temperature' ? 'AIR TEMP / °C' : `MM / ${duration(item.interval)}`;
 $('detail-heading').textContent = seismic ? quakeName(item) : item.name;
 $('detail-time').textContent = `${seismic ? 'EVENT' : 'MODEL VALID'} / ${formatDate(seismic ? item.properties.time : item.time)}`;
 $('detail-lat').textContent = `${Math.abs(lat).toFixed(2)}° ${lat >= 0 ? 'N' : 'S'}`;
 $('detail-lon').textContent = `${Math.abs(lon).toFixed(2)}° ${lon >= 0 ? 'E' : 'W'}`;
 $('secondary-label').textContent = seismic ? 'DEPTH' : state.layer === 'temperature' ? `PRECIPITATION / ${duration(item.interval)}` : 'AIR TEMPERATURE / 2 M';
 $('detail-depth').textContent = seismic ? Number.isFinite(depth) ? `${depth.toFixed(1)} KM` : 'UNKNOWN' : state.layer === 'temperature' ? `${item.precipitation.toFixed(2)} MM` : `${item.temperature.toFixed(1)} °C`;
 $('event-id').textContent = seismic ? `USGS / ${item.id.toUpperCase()}` : `OPEN-METEO / ${duration(item.interval)} MODEL INTERVAL`;
 $('weather-history').hidden = seismic;
 $('data-change').textContent = '';
 if (!seismic) {
  renderHistory(item);
  const previous = feed.previous.get(id);
  if (previous && previous.time < item.time) {
   const change = weatherValue(item) - weatherValue(previous);
   $('data-change').textContent = `${change >= 0 ? '+' : ''}${change.toFixed(state.layer === 'temperature' ? 1 : 2)}${state.layer === 'temperature' ? '°C' : ' MM'} since model valid ${utcTime(previous.time)} UTC`;
  } else $('data-change').textContent = 'Values refresh when the model advances.';
 }
 let url = seismic ? item.properties.url : 'https://open-meteo.com/en/docs';
 try {
  const parsed = new URL(url);
  if (parsed.protocol !== 'https:' || !['earthquake.usgs.gov', 'open-meteo.com'].includes(parsed.hostname)) url = null;
 } catch { url = null; }
 $('event-link').hidden = !url;
 if (url) $('event-link').href = url;
 else $('event-link').removeAttribute('href');
 $('event-link').textContent = seismic ? 'EXPLORE USGS RECORD ↗' : 'OPEN-METEO / DATA SOURCE ↗';
 if (focus) openWidget('details');
}
function renderHistory(item) {
 const chart = $('history-chart');
 chart.replaceChildren();
 const water = state.layer === 'precipitation';
 $('weather-history').querySelector('.history-label').textContent = water ? 'RECENT 6H · PRECIP / PRECEDING HOUR' : 'RECENT 6H · AIR TEMP / °C';
 const history = item.history;
 if (history.length < 2) {
  $('history-summary').textContent = 'Recent hourly history unavailable.';
  return;
 }
 const values = history.map(point => water ? point.precipitation : point.temperature);
 const min = water ? 0 : Math.min(...values) - 1;
 const max = water ? Math.max(0.1, ...values) : Math.max(...values) + 1;
 const ns = 'http://www.w3.org/2000/svg';
 if (water) {
  history.forEach((point, i) => {
   const bar = document.createElementNS(ns, 'rect');
   const height = point.precipitation / max * 39;
   bar.setAttribute('x', String(8 + i / history.length * 204));
   bar.setAttribute('y', String(48 - height));bar.setAttribute('width', String(204 / history.length - 5));
   bar.setAttribute('height', String(height));bar.setAttribute('fill', '#78d8ff');bar.setAttribute('rx', '2');chart.append(bar);
  });
 } else {
  const path = document.createElementNS(ns, 'polyline');
  path.setAttribute('points', history.map((point, i) => `${8 + i / (history.length - 1) * 204},${48 - (point.temperature - min) / (max - min) * 39}`).join(' '));
  path.setAttribute('fill', 'none');path.setAttribute('stroke', temperatureColor(item.temperature));path.setAttribute('stroke-width', '2');chart.append(path);
 }
 const baseline = document.createElementNS(ns, 'line');
 baseline.setAttribute('x1', '8');baseline.setAttribute('x2', '212');baseline.setAttribute('y1', '49');baseline.setAttribute('y2', '49');baseline.setAttribute('stroke', '#7d8c9e44');chart.append(baseline);
 chart.setAttribute('aria-label', `${item.name}: ${history.map(point => `${utcTime(point.time)} UTC ${water ? point.precipitation + ' millimeters in the preceding hour' : point.temperature + ' degrees Celsius'}`).join(', ')}`);
 const first = history[0]; const last = history.at(-1);
 $('history-summary').textContent = `${utcTime(first.time).slice(0, 5)}–${utcTime(last.time).slice(0, 5)} UTC · ${Math.min(...values).toFixed(1)}–${Math.max(...values).toFixed(1)}${water ? ' MM / HOUR' : '°C'}`;
}

function clearSelection() {
 currentFeed().selected = null;
 globe?.select(null, false);
 $('detail-mag').textContent = '—';
 $('detail-heading').textContent = currentFeed().updated ? 'No matching samples.' : 'Waiting for data.';
 $('detail-time').textContent = currentFeed().updated ? 'Lower the filter to explore more.' : 'Connecting to the current feed…';
 for (const id of ['detail-lat', 'detail-lon', 'detail-depth']) $(id).textContent = '—';
 $('event-id').textContent = 'NO SELECTION';
 $('weather-history').hidden = true;
 $('event-link').hidden = true;
 $('event-link').removeAttribute('href');
 $('data-change').textContent = '';
}
function render() {
 if (state.layer === 'ozone') { renderOzone();return; }
 const feed = currentFeed(); const items = visibleItems(); const seismic = state.layer === 'seismic';
 const fragment = document.createDocumentFragment();
 for (const item of items) {
  const li = document.createElement('li');
  const row = document.createElement('button');row.type = 'button';row.className = 'event-row';row.dataset.event = item.id;
  const number = document.createElement('span');number.className = 'row-mag';
  number.textContent = (seismic ? item.properties.mag : weatherValue(item)).toFixed(1);
  number.style.color = seismic ? '#ffb16c' : state.layer === 'temperature' ? temperatureColor(item.temperature) : item.precipitation > 0 ? '#78d8ff' : '#667a8e';
  const info = document.createElement('span');info.className = 'row-info';
  const name = document.createElement('span');name.className = 'row-place';name.textContent = seismic ? quakeName(item) : item.name;
  const time = document.createElement('span');time.className = 'row-time';
  time.textContent = seismic ? `${utcTime(item.properties.time)} UTC / M ${item.properties.mag.toFixed(1)}` : `${state.layer === 'temperature' ? '°C' : `MM / ${duration(item.interval)}`} · ${utcTime(item.time).slice(0, 5)} UTC`;
  info.append(name, time);
  const arrow = document.createElement('span');arrow.className = 'row-arrow';arrow.textContent = '↗';arrow.setAttribute('aria-hidden', 'true');
  row.append(number, info, arrow);row.addEventListener('click', () => selectItem(item.id, true));li.append(row);fragment.append(li);
 }
 $('event-list').replaceChildren(fragment);
 $('visible-count').textContent = String(items.length).padStart(2, '0');
 $('log-heading').textContent = seismic ? 'RECENT TREMORS' : 'SAMPLED LOCATIONS';
 $('stat-one-label').textContent = seismic ? 'EVENTS / 24H' : 'HOTTEST SAMPLE';
 $('stat-two-label').textContent = seismic ? 'STRONGEST' : 'WETTEST SAMPLE';
 $('total').textContent = feed.items.length ? seismic ? String(feed.items.length) : `${Math.max(...feed.items.map(item => item.temperature)).toFixed(1)}°` : '—';
 $('strongest').textContent = feed.items.length ? seismic ? `M ${Math.max(...feed.items.map(item => item.properties.mag)).toFixed(1)}` : `${Math.max(...feed.items.map(item => item.precipitation)).toFixed(1)} mm` : '—';
 if (!seismic && feed.items.length) {
  const intervals = [...new Set(feed.items.map(item => item.interval))];
  $('stat-two-label').textContent = intervals.length === 1 ? `WETTEST / ${duration(intervals[0])}` : 'WETTEST SAMPLE';
 }
 if (globe) seismic ? globe.setEvents(items) : globe.setWeather(items, state.layer);
 updateStatus();
 const selected = items.find(item => item.id === feed.selected) || items[0];
 if (selected) selectItem(selected.id);
 else clearSelection();
}
async function loadWeather(force = false) {
 const feed = state.weather;
 if (feed.loading || (!force && feed.updated && Date.now() - feed.updated < WEATHER_INTERVAL)) return;
 feed.loading = true;updateStatus();
 const controller = new AbortController();const timeout = setTimeout(() => controller.abort(), 30000);
 try {
  const response = await fetch(weatherURL(), { signal: controller.signal });
  if (!response.ok) throw new Error(`Weather HTTP ${response.status}`);
  const items = parseWeather(await response.json());
  if (!items.length) throw new Error('No valid weather samples');
  feed.previous = new Map(feed.items.map(item => [item.id, item]));
  feed.items = items;feed.updated = Date.now();
  feed.error = items.some(item => Date.now() - item.time > 2 * 3600000) ? 'Source model is delayed. Showing its latest valid times.' : items.length < SITES.length ? `${items.length} / ${SITES.length} samples available. Missing values omitted.` : '';
 } catch {
  feed.error = feed.updated ? `Weather connection interrupted. Retaining data fetched ${utcTime(feed.updated)} UTC.` : 'Weather unavailable. Select Refresh to retry; seismic data is separate.';
 } finally {
  clearTimeout(timeout);feed.loading = false;
  if (['temperature', 'precipitation'].includes(state.layer)) render();
 }
}
async function loadSeismic(force = false) {
 const feed = state.seismic;
 if (feed.loading || (!force && feed.updated && Date.now() - feed.updated < 60000)) return;
 feed.loading = true;updateStatus();
 const controller = new AbortController();const timeout = setTimeout(() => controller.abort(), 15000);
 try {
  const response = await fetch(FEED_URL, { signal: controller.signal, cache: 'no-store' });
  if (!response.ok) throw new Error('USGS unavailable');
  const data = await response.json();
  if (data.type !== 'FeatureCollection' || !Array.isArray(data.features) || !Number.isFinite(data.metadata?.generated)) throw new Error('Invalid feed');
  feed.items = data.features.filter(item => {
   const coords = item.geometry?.coordinates;
   return item.properties?.type === 'earthquake' && typeof item.id === 'string' && Number.isFinite(item.properties.mag) && Number.isFinite(item.properties.time) && Array.isArray(coords) && Number.isFinite(coords[0]) && Number.isFinite(coords[1]) && Math.abs(coords[0]) <= 180 && Math.abs(coords[1]) <= 90;
  }).sort((a, b) => b.properties.time - a.properties.time);
  feed.updated = Date.now();feed.error = Date.now() - data.metadata.generated > 10 * 60000 ? 'USGS source is delayed. Showing its latest available records.' : '';
 } catch { feed.error = feed.updated ? `USGS connection interrupted. Retaining records fetched ${utcTime(feed.updated)} UTC.` : 'USGS unavailable. Select Refresh to retry; weather data is separate.'; }
 finally { clearTimeout(timeout);feed.loading = false;if (state.layer === 'seismic') render(); }
}
function updateOzoneStatus() {
 $('connection').textContent = ozone.loading ? 'CHECKING NASA DATA' : ozone.snapshot ? 'OZONE / SAVED DATA' : 'OZONE / DAILY DATA';
 $('refresh').disabled = ozone.loading;
 $('synced').textContent = `OBSERVED ${ozone.data.date}`;
 $('sync-cycle').textContent = '/ DAILY SOURCE · 1H CHECK';
 $('ozone-status').textContent = ozone.loading ? `Checking NASA. Showing dated ${ozone.snapshot ? 'saved ' : ''}observations in the meantime.` : ozone.error || (ozone.snapshot ? `Saved NASA observations, checked ${OZONE_SNAPSHOT.checkedAt}. Not a live ozone map.` : `NASA daily statistics${state.paused ? ' · Automatic checks paused' : ''}. Not a live ozone map.`);
}
function renderOzone() {
 const data = ozone.data;
 $('total').textContent = `${data.area.toFixed(2)}`;
 $('stat-one-label').textContent = 'OZONE HOLE / MILLION KM²';
 $('strongest').textContent = `${data.minimum} DU`;
 $('stat-two-label').textContent = 'SOUTHERN MINIMUM';
 $('ozone-area').textContent = data.area.toFixed(2);
 $('ozone-minimum').textContent = String(data.minimum);
 $('ozone-date').textContent = `OBSERVED / ${data.date} · NASA TOMS + OMI + OMPS`;
 const points = data.history;
 const svg = $('ozone-chart');svg.replaceChildren();
 if (points.length > 1) {
  const maximum = Math.max(1, ...points.map(point => point.area));
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
  line.setAttribute('points', points.map((point, index) => `${8 + index / (points.length - 1) * 284},${72 - point.area / maximum * 60}`).join(' '));
  line.setAttribute('fill', 'none');line.setAttribute('stroke', '#ee9cdb');line.setAttribute('stroke-width', '2');svg.append(line);
  svg.setAttribute('aria-label', points.map(point => `${point.date}: ${point.area} million square kilometers`).join(', '));
  $('ozone-chart-range').textContent = `${points[0].date} — ${points.at(-1).date} · 0–${maximum.toFixed(1)} MILLION KM²`;
 }
 globe?.setOzone(data);updateOzoneStatus();
}
async function loadOzone(force = false) {
 if (ozone.loading || (!force && ozone.checked && Date.now() - ozone.checked < 3600000)) return;
 ozone.loading = true;ozone.checked = Date.now();updateStatus();
 const controller = new AbortController();const timeout = setTimeout(() => controller.abort(), 12000);
 try {
  const texts = await Promise.all(ozoneURLs().map(async url => {
   const response = await fetch(url, {signal: controller.signal});
   if (!response.ok) throw new Error('NASA source unavailable');
   return response.text();
  }));
  const next = mergeOzone(...texts);
  if (next.date < ozone.data.date) throw new Error('NASA response predates retained observations');
  ozone.data = next;ozone.snapshot = false;ozone.error = '';
 } catch {
  ozone.error = `NASA direct refresh unavailable. Retaining ${ozone.snapshot ? 'saved ' : ''}observations dated ${ozone.data.date}; this is not current real-time data.`;
 } finally {
  clearTimeout(timeout);ozone.loading = false;if (state.layer === 'ozone') renderOzone();
 }
}
$('ozone-focus').addEventListener('click', () => globe?.focusAntarctica());
const loadActive = force => state.layer === 'ozone' ? loadOzone(force) : state.layer === 'seismic' ? loadSeismic(force) : loadWeather(force);
function changeLayer(layer) {
 state.layer = layer;
 document.querySelectorAll('button[data-layer]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.layer === layer)));
 document.body.dataset.layer = layer;
 $('ozone-focus').hidden = layer !== 'ozone';
 $('ozone-settings-note').hidden = layer !== 'ozone';
 document.querySelector('.filter').hidden = layer === 'ozone';
 $('data-launch-label').textContent = layer === 'ozone' ? 'OZONE REPORT' : 'LOCATIONS';
 setDataView(document.querySelector('[data-view][aria-pressed=true]')?.dataset.view || 'locations');
 if (layer === 'ozone') {
  $('layer-caption').textContent = 'ANTARCTIC OZONE / NASA DAILY';
  $('sampling-note').textContent = 'EQUIVALENT-AREA CAP · SHELL HEIGHT EXAGGERATED · NOT A SATELLITE MAP';
  $('legend').replaceChildren();
  for (const [color, text] of [['#72c7ff', 'OZONE SHELL'], ['#f093d7', 'DEPLETED CAP / < 220 DU']]) {
   const label = document.createElement('span');const dot = document.createElement('i');dot.style.background = color;label.append(dot, document.createTextNode(text));$('legend').append(label);
  }
  renderOzone();loadOzone(false);return;
 }
 const ranges = { temperature: [-30, 45, 1], precipitation: [0, 10, 0.1], seismic: [0, 5, 0.5] };
 const [min, max, step] = ranges[layer];
 $('magnitude').min = min;$('magnitude').max = max;$('magnitude').step = step;$('magnitude').value = state.filters[layer];
 $('filter-label').textContent = layer === 'temperature' ? 'MIN TEMPERATURE' : layer === 'precipitation' ? 'MIN PRECIPITATION' : 'MIN MAGNITUDE';
 $('layer-caption').textContent = layer === 'temperature' ? 'CURRENT AIR TEMPERATURE / °C' : layer === 'precipitation' ? 'CURRENT PRECIPITATION / MM PER INTERVAL' : 'SEISMIC ACTIVITY / PAST 24H';
 $('sampling-note').textContent = layer === 'seismic' ? 'SEPARATE GEOLOGICAL FEED · NOT A CLIMATE INDICATOR' : `${SITES.length} CITY SAMPLES · ${layer === 'temperature' ? 'ABSOLUTE TEMPERATURE, NOT WARMING ANOMALY' : 'ACCUMULATED RAIN + SNOW / MODEL INTERVAL'}`;
 $('legend').replaceChildren();
 if (layer === 'temperature') {
  const bar = document.createElement('span');bar.className = 'heat-scale';$('legend').append(bar);
  for (const text of ['−10°', '10°', '25°', '40°C']) { const span = document.createElement('span');span.textContent = text;$('legend').append(span); }
 } else {
  const labels = layer === 'precipitation' ? ['DRY', '0.1 MM', '1 MM', '5+ MM'] : ['M < 2.5', 'M 2.5–4.9', 'M 5+'];
  labels.forEach((text, i) => {const span = document.createElement('span');const dot = document.createElement('i');dot.style.background = layer === 'precipitation' ? ['#435466', '#77bbda', '#45c4ff', '#b0eeff'][i] : ['#7ac5ff', '#ffb16c', '#ff5e69'][i];span.append(dot, document.createTextNode(text));$('legend').append(span);});
 }
 updateThreshold();render();loadActive(false);
}
function updateThreshold() {
 const value = state.filters[state.layer];
 $('threshold').textContent = value === (state.layer === 'temperature' ? -30 : 0) ? 'ALL' : `${value.toFixed(state.layer === 'temperature' ? 0 : 1)}${state.layer === 'temperature' ? '°C' : state.layer === 'precipitation' ? ' MM' : ' M'}+`;
}
$('magnitude').addEventListener('input', event => {state.filters[state.layer] = Number(event.target.value);updateThreshold();render();});
document.querySelectorAll('button[data-layer]').forEach(button => button.addEventListener('click', () => changeLayer(button.dataset.layer)));
$('refresh').addEventListener('click', () => loadActive(true));
$('pause').addEventListener('click', () => {state.paused = !state.paused;$('pause').textContent = state.paused ? 'RESUME FEED' : 'PAUSE FEED';$('pause').setAttribute('aria-pressed', String(state.paused));updateStatus();if (!state.paused) loadActive(false);});
setInterval(() => { if (!state.paused && !document.hidden) loadActive(false); }, 60000);
document.addEventListener('visibilitychange', () => {if (!document.hidden && !state.paused) loadActive(false);});
function showRotation(value) {rotating = value;$('rotate').setAttribute('aria-pressed', String(value));$('rotate').firstChild.textContent = value ? 'Ⅱ ' : '▷ ';}
$('rotate').addEventListener('click', () => globe?.setRotation(!rotating));
$('zoom-in').addEventListener('click', () => globe?.zoom(-1));
$('zoom-out').addEventListener('click', () => globe?.zoom(1));
$('reset').addEventListener('click', () => globe?.reset());
// Native dialogs provide keyboard focus containment, Escape and focus restoration.
function setDataView(view) {
 $('readings').scrollTop = 0;
 const isOzone = state.layer === 'ozone';
 $('ozone-panel').hidden = !isOzone;
 document.querySelector('.widget-tabs').hidden = isOzone;
 $('readings-title').textContent = isOzone ? 'OZONE LAYER / ANTARCTIC REPORT' : 'LIVE DATA';
 document.querySelector('.event-panel').hidden = isOzone || view !== 'locations';
 document.querySelector('.event-detail').hidden = isOzone || view !== 'details';
 document.querySelectorAll('[data-view]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.view === view)));
 document.querySelectorAll('[data-widget]').forEach(button => button.setAttribute('aria-expanded', String($('readings').open && button.dataset.widget === view)));
}
function openWidget(name) {
 const id = ['locations', 'details'].includes(name) ? 'readings' : name;
 const dialog = $(id);
 if (dialog.open && ['locations', 'details'].includes(name)) { setDataView(name);(state.layer === 'ozone' ? document.querySelector('[data-close=readings]') : document.querySelector(`[data-view="${name}"]`)).focus();return; }
 document.querySelectorAll('.widget-dialog[open]').forEach(open => open.close());
 if (['locations', 'details'].includes(name)) setDataView(name);
 dialog.showModal();
 dialog.scrollTop = 0;
 document.querySelectorAll('[data-widget]').forEach(button => button.setAttribute('aria-expanded', String(button.dataset.widget === name)));
}
document.querySelectorAll('[data-widget]').forEach(button => button.addEventListener('click', () => openWidget(button.dataset.widget)));
document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => setDataView(button.dataset.view)));
document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => $(button.dataset.close).close()));
document.querySelectorAll('.widget-dialog').forEach(dialog => {
 let outsideDown = false;
 const outside = event => {const r = dialog.getBoundingClientRect();return event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom;};
 dialog.addEventListener('pointerdown', event => { outsideDown = outside(event); });
 dialog.addEventListener('click', event => {if (outsideDown && outside(event)) dialog.close();outsideDown = false;});
 dialog.addEventListener('close', () => {
  document.querySelectorAll('[data-widget]').forEach(button => {if (button.getAttribute('aria-controls') === dialog.id) button.setAttribute('aria-expanded', 'false');});
 });
});
setDataView('locations');

async function initializeGlobe() {
 try {
  const { createGlobe } = await import('./globe.js');
  globe = createGlobe($('globe'), id => selectItem(id, true), showRotation);
  $('globe-message').hidden = true;render();
 } catch (error) {
  $('globe-message').hidden = false;$('globe-message').textContent = 'The 3D view needs WebGL and a local web server. Data remains available in the list.';
  for (const id of ['rotate', 'zoom-in', 'zoom-out', 'reset']) $(id).disabled = true;
  console.error('Unable to initialize Earth:', error);
 }
}
changeLayer('temperature');initializeGlobe();
