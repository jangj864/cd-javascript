const STORAGE_KEY = 'earthSignal.countrySearch';
const normalize = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase().replace(/[\s.,'’()-]/g, '');
const ALIASES = { KR: ['한국', '대한민국', 'korea', 'south korea'], US: ['미국', 'usa', 'united states', 'america'], GB: ['영국', 'uk', 'britain'], AE: ['아랍에미리트', 'uae'], TR: ['터키', '튀르키예', 'turkey'], KP: ['북한', 'north korea'], CN: ['중국'], JP: ['일본'], FR: ['프랑스'], DE: ['독일'] };
export function matchCountries(countries, query) {
 const needle = normalize(query.trim());
 if (!needle) return [];
 return countries.map(country => {
  const names = [country.name, country.official, country.korean, country.koreanOfficial, country.code, ...(ALIASES[country.code] || [])].filter(Boolean).map(normalize);
  const capital = normalize(country.capital || '');
  const rank = names.some(name => name === needle) ? 0 : names.some(name => name.startsWith(needle)) ? 1 : names.some(name => name.includes(needle)) || capital.includes(needle) ? 2 : 3;
  return {country, rank};
 }).filter(item => item.rank < 3).sort((a, b) => a.rank - b.rank || a.country.name.localeCompare(b.country.name)).slice(0, 12).map(item => item.country);
}
export function initializeCountrySearch(onSelect) {
 const input = document.getElementById('country-search');
 const results = document.getElementById('country-results');
 const status = document.getElementById('country-search-status');
 let countries = [];
 let ready = false;
 let failed = false;
 let request = 0;
 let controller = null;
 // getElementById takes the ID without '#'; storage can be disabled by a browser.
 try { input.value = (localStorage.getItem(STORAGE_KEY) || '').slice(0, 80); } catch { /* Search also works without storage. */ }
 function cancelSelection() { request++;controller?.abort();controller = null; }
 function draw() {
  results.replaceChildren();
  const query = input.value.trim();
  document.getElementById('event-list').hidden = Boolean(query);
  document.getElementById('status').hidden = Boolean(query);
  results.hidden = !query;
  if (!query) { status.textContent = 'Search countries and territories in Korean or English.';return; }
  if (!ready) { status.textContent = failed ? 'Country directory unavailable. Reopen the page to retry.' : 'Loading country directory…';return; }
  const matches = matchCountries(countries, query);
  status.textContent = matches.length ? `${matches.length} matches. Select a place to view its weather.` : 'No matching countries. Try another name or spelling.';
  matches.forEach(country => {
   const li = document.createElement('li');
   const button = document.createElement('button');button.type = 'button';button.className = 'country-result';
   const name = document.createElement('span');name.textContent = country.name;
   const detail = document.createElement('small');detail.textContent = `${country.korean || country.code} · ${country.capital ? 'Capital: ' + country.capital : 'Geographic reference point'}`;
   const arrow = document.createElement('span');arrow.textContent = '↗';arrow.setAttribute('aria-hidden', 'true');arrow.className = 'country-result-arrow';
   button.append(name, detail, arrow);button.addEventListener('click', async () => {
    cancelSelection();const token = request;controller = new AbortController();
    status.textContent = `Loading weather at ${country.name}’s reference point…`;
    button.setAttribute('aria-busy', 'true');
    try {
     await onSelect(country, controller.signal);
     if (token === request) status.textContent = `Selected ${country.name}.`;
    } catch (error) {
     if (token === request) status.textContent = 'Weather could not be loaded. Select the country again to retry.';
    } finally { if (token === request) button.removeAttribute('aria-busy'); }
   });li.append(button);results.append(li);
  });
 }
 function update() {
  cancelSelection();
  try { localStorage.setItem(STORAGE_KEY, input.value); } catch { /* Do not block search if storage is unavailable. */ }
  draw();
 }
 input.addEventListener('input', event => {if (!event.isComposing) update();});
 input.addEventListener('compositionend', update);
 input.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !event.isComposing) {
   event.preventDefault();input.closest('dialog')?.close();
  }
 });
 document.getElementById('country-search-clear').addEventListener('click', () => {input.value = '';update();input.focus();});
 document.getElementById('country-search-form').addEventListener('submit', event => {event.preventDefault();results.querySelector('button')?.click();});
 const timeoutController = new AbortController();
 const timeout = setTimeout(() => timeoutController.abort(), 10000);
 fetch('./countries.json', {signal: timeoutController.signal}).then(response => {
  if (!response.ok) throw new Error('Country directory unavailable');return response.json();
 }).then(data => {if (!Array.isArray(data.countries)) throw new Error('Invalid country directory');countries = data.countries;ready = true;draw();}).catch(() => {failed = true;draw();}).finally(() => clearTimeout(timeout));
 draw();
}
