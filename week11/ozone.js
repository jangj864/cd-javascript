// Dated NASA observations, retained if the daily source cannot be read in-browser.
// Never substitute the climatology columns for missing daily measurements (-9999).
export const NASA_OZONE = 'https://ozonewatch.gsfc.nasa.gov/';
export const OZONE_SNAPSHOT = {
 date: '2026-10-31', area: 19.48, minimum: 141, checkedAt: '2026-11-04',
 history: [
  ['2026-10-18',24.77],['2026-10-19',24.90],['2026-10-20',24.02],['2026-10-21',23.40],
  ['2026-10-22',23.94],['2026-10-23',23.40],['2026-10-24',23.48],['2026-10-25',21.68],
  ['2026-10-26',20.96],['2026-10-27',21.08],['2026-10-28',19.89],['2026-10-29',19.37],
  ['2026-10-30',19.29],['2026-10-31',19.48],
 ].map(([date, area]) => ({date, area})),
};
export function ozoneURLs(year = new Date().getUTCFullYear()) {
 const base = 'https://ozonewatch.gsfc.nasa.gov/meteorology/figures/ozone/';
 return ['areas', 'mins'].map(type => `${base}to3${type}_${year}_toms%2Bomi%2Bomps.txt`);
}
export function parseOzoneSeries(text, expectedName, max = Infinity) {
 if (!text.includes(`Name: ${expectedName}`)) throw new Error('Unexpected NASA data series');
 const rows = new Map();
 for (const line of text.split(/\r?\n/)) {
  const fields = line.trim().split(/\s+/);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(fields[0])) continue;
  const time = Date.parse(fields[0] + 'T00:00:00Z');
  const value = Number(fields[1]);
  if (Number.isFinite(time) && time <= Date.now() && Number.isFinite(value) && value >= 0 && value <= max) rows.set(fields[0], value);
 }
 return rows;
}
export function mergeOzone(areaText, minimumText) {
 const areas = parseOzoneSeries(areaText, 'Ozone Hole Area', 510);
 const minima = parseOzoneSeries(minimumText, 'SH Minimum Ozone', 1000);
 const dates = [...areas.keys()].filter(date => minima.has(date) && minima.get(date) > 0).sort();
 if (!dates.length) throw new Error('No matching daily ozone measurements');
 const date = dates.at(-1);
 return {date, area: areas.get(date), minimum: minima.get(date), history: [...areas].filter(([day]) => day <= date).sort(([a], [b]) => a.localeCompare(b)).slice(-14).map(([date, area]) => ({date, area}))};
}
