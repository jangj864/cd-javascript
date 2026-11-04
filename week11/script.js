'use strict';

// USGS updates this public, keyless feed every minute.
const FEED_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
const $ = (id) => document.getElementById(id);
let globe = null;
let rotating = !matchMedia('(prefers-reduced-motion: reduce)').matches;
const state = { events: [], selected: null, minimum: 0, paused: false, loading: false, updated: null, failed: false };
const utcTime = (time) => new Date(time).toLocaleTimeString('en-GB', { timeZone: 'UTC', hour12: false });
const magnitude = (event) => event.properties.mag.toFixed(1);
const place = (event) => event.properties.place || 'Unnamed seismic region';
const age = (time) => {
  const minutes = Math.max(0, Math.floor((Date.now() - time) / 60000));
  return minutes < 1 ? 'JUST NOW' : minutes < 60 ? `${minutes} MIN AGO` : `${Math.floor(minutes / 60)}H ${minutes % 60}M AGO`;
};
const filteredEvents = () => state.events.filter((event) => state.minimum === 0 || event.properties.mag >= state.minimum);

function updateConnection() {
  $('connection').textContent = state.loading ? 'SYNCHRONIZING' : state.failed ? 'CONNECTION LOST' : state.paused ? 'UPDATES PAUSED' : state.updated ? 'RECEIVING LIVE DATA' : 'AWAITING CONNECTION';
}

function selectEvent(id, focus = false) {
  const event = state.events.find((item) => item.id === id);
  if (!event) return;
  state.selected = id;
  document.querySelectorAll('[data-event]').forEach((element) => {
    const selected = element.dataset.event === id;
    element.classList.toggle('selected', selected);
    element.setAttribute('aria-pressed', String(selected));
  });
  globe?.select(id, focus);
  const [longitude, latitude, depth] = event.geometry.coordinates;
  $('event-id').textContent = `ID / ${event.id.toUpperCase()}`;
  $('detail-mag').textContent = magnitude(event);
  $('detail-heading').textContent = place(event);
  $('detail-time').textContent = new Date(event.properties.time).toLocaleString('en-GB', { timeZone: 'UTC', dateStyle: 'medium', timeStyle: 'medium' }) + ' UTC';
  $('detail-lat').textContent = `${Math.abs(latitude).toFixed(2)}° ${latitude >= 0 ? 'N' : 'S'}`;
  $('detail-lon').textContent = `${Math.abs(longitude).toFixed(2)}° ${longitude >= 0 ? 'E' : 'W'}`;
  $('detail-depth').textContent = Number.isFinite(depth) ? `${depth.toFixed(1)} KM` : 'UNKNOWN';
  // Allow only official HTTPS record links from the external feed.
  let safeURL = null;
  try {
    const url = new URL(event.properties.url);
    if (url.protocol === 'https:' && url.hostname === 'earthquake.usgs.gov') safeURL = url.href;
  } catch { /* Missing record URL: leave the external link hidden. */ }
  $('event-link').hidden = !safeURL;
  if (safeURL) $('event-link').href = safeURL;
  else $('event-link').removeAttribute('href');

}

function clearSelection() {
  state.selected = null;
  $('event-id').textContent = 'NO SIGNAL SELECTED';
  $('detail-mag').textContent = '—';
  $('detail-heading').textContent = 'No signals at this frequency.';
  $('detail-time').textContent = 'Lower the magnitude threshold to receive more signals.';
  for (const id of ['detail-lat', 'detail-lon', 'detail-depth']) $(id).textContent = '—';
  globe?.select(null, false);
  $('event-link').hidden = true;
  $('event-link').removeAttribute('href');
}

function render() {
  const events = filteredEvents();
  const list = document.createDocumentFragment();
  for (const event of events) {
    const item = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'event-row';
    button.dataset.event = event.id;
    const number = document.createElement('span');
    number.className = 'row-mag';
    number.textContent = magnitude(event);
    number.style.color = event.properties.mag >= 5 ? '#ff5e69' : event.properties.mag >= 2.5 ? '#ffb16c' : '#7ac5ff';
    const info = document.createElement('span');
    info.className = 'row-info';
    const location = document.createElement('span');
    location.className = 'row-place';
    location.textContent = place(event);
    const time = document.createElement('span');
    time.className = 'row-time';
    time.textContent = `${age(event.properties.time)} / ${utcTime(event.properties.time)} UTC`;
    info.append(location, time);
    const arrow = document.createElement('span');
    arrow.className = 'row-arrow';
    arrow.textContent = '↗';
    arrow.setAttribute('aria-hidden', 'true');
    button.append(number, info, arrow);
    button.addEventListener('click', () => selectEvent(event.id, true));
    item.append(button);
    list.append(item);

  }
  globe?.setEvents(events);
  $('event-list').replaceChildren(list);
  $('visible-count').textContent = String(events.length).padStart(3, '0');
  $('total').textContent = String(state.events.length).padStart(3, '0');
  $('strongest').textContent = state.events.length ? `M ${Math.max(...state.events.map((event) => event.properties.mag)).toFixed(1)}` : '—';
  if (!state.failed) $('status').textContent = events.length ? `${events.length} events / past 24 hours${state.paused ? ' · Feed paused' : ''}` : 'No events at this magnitude. Lower the filter to see more.';
  const selected = events.find((event) => event.id === state.selected) || events[0];
  if (selected) selectEvent(selected.id);
  else clearSelection();
}

async function fetchEvents() {
  if (state.loading) return;
  state.loading = true;
  $('refresh').disabled = true;
  updateConnection();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(FEED_URL, { signal: controller.signal, cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (data.type !== 'FeatureCollection' || !Array.isArray(data.features) || !Number.isFinite(data.metadata?.generated)) throw new Error('Invalid feed');
    state.events = data.features.filter((event) => {
      const coords = event.geometry?.coordinates;
      return event.properties?.type === 'earthquake' && typeof event.id === 'string' && Number.isFinite(event.properties?.mag) && Number.isFinite(event.properties?.time) && Array.isArray(coords) && Number.isFinite(coords[0]) && Number.isFinite(coords[1]) && Math.abs(coords[0]) <= 180 && Math.abs(coords[1]) <= 90;
    }).sort((a, b) => b.properties.time - a.properties.time);
    state.updated = Date.now();
    state.failed = false;
    $('synced').textContent = `${utcTime(state.updated)} UTC`;
    render();
    if (Date.now() - data.metadata.generated > 10 * 60000) {
      state.failed = true;
      $('status').textContent = 'The source feed is delayed. Displaying its latest available records; retrying every minute.';
    }
  } catch (error) {
    state.failed = true;
    $('status').textContent = state.updated ? `Connection interrupted. Showing records received at ${utcTime(state.updated)} UTC. Select Refresh to retry.` : 'Unable to reach USGS. Check your connection and select Refresh to retry.';
  } finally {
    clearTimeout(timeout);
    state.loading = false;
    $('refresh').disabled = false;
    updateConnection();
  }
}

$('magnitude').addEventListener('input', (event) => {
  state.minimum = Number(event.target.value);
  $('threshold').textContent = state.minimum ? `M ${state.minimum.toFixed(1)}+` : 'ALL';
  if (state.updated) render();
});
$('refresh').addEventListener('click', fetchEvents);
$('pause').addEventListener('click', () => {
  state.paused = !state.paused;
  $('pause').textContent = state.paused ? 'RESUME FEED' : 'PAUSE FEED';
  $('pause').setAttribute('aria-pressed', String(state.paused));
  updateConnection();
  if (state.updated) render();
  if (!state.paused) fetchEvents();
});
setInterval(() => { if (!state.paused && !document.hidden) fetchEvents(); }, 60000);
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && !state.paused && (!state.updated || Date.now() - state.updated >= 60000)) fetchEvents();
});
fetchEvents();

function showRotation(value) {
  rotating = value;
  $('rotate').setAttribute('aria-pressed', String(value));
  $('rotate').firstChild.textContent = value ? 'Ⅱ ' : '▷ ';
}
$('rotate').addEventListener('click', () => globe?.setRotation(!rotating));
$('zoom-in').addEventListener('click', () => globe?.zoom(-1));
$('zoom-out').addEventListener('click', () => globe?.zoom(1));
$('reset').addEventListener('click', () => globe?.reset());
$('about-toggle').addEventListener('click', () => {
  $('about').hidden = !$('about').hidden;
  $('about-toggle').setAttribute('aria-expanded', String(!$('about').hidden));
  if (!$('about').hidden) $('about').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
});
async function initializeGlobe() {
  try {
    const { createGlobe } = await import('./globe.js');
    globe = createGlobe($('globe'), (id) => selectEvent(id, true), showRotation);
    $('globe-message').hidden = true;
    globe.setEvents(filteredEvents());
    if (state.selected) globe.select(state.selected, false);
  } catch (error) {
    $('globe-message').hidden = false;
    $('globe-message').textContent = 'The 3D view needs WebGL and a local web server. Earthquake records are still available in the list.';
    for (const id of ['rotate', 'zoom-in', 'zoom-out', 'reset']) $(id).disabled = true;
    console.error('Unable to initialize Earth:', error);
  }
}
initializeGlobe();
