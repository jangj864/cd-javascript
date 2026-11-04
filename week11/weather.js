// Fixed geographic samples: these are not a global average or a climate-anomaly grid.
export const SITES = [
 ['New York, US',40.71,-74.01],['Los Angeles, US',34.05,-118.24],['Vancouver, Canada',49.28,-123.12],['Anchorage, US',61.22,-149.90],
 ['Mexico City, Mexico',19.43,-99.13],['Honolulu, US',21.31,-157.86],['Bogotá, Colombia',4.71,-74.07],['Lima, Peru',-12.05,-77.04],
 ['Manaus, Brazil',-3.12,-60.02],['São Paulo, Brazil',-23.55,-46.63],['Santiago, Chile',-33.45,-70.67],['Buenos Aires, Argentina',-34.60,-58.38],
 ['Nuuk, Greenland',64.18,-51.72],['Reykjavík, Iceland',64.15,-21.94],['London, UK',51.51,-0.13],['Madrid, Spain',40.42,-3.70],
 ['Berlin, Germany',52.52,13.41],['Rome, Italy',41.90,12.50],['Moscow, Russia',55.76,37.62],['Cairo, Egypt',30.04,31.24],
 ['Lagos, Nigeria',6.52,3.38],['Kinshasa, DR Congo',-4.44,15.27],['Nairobi, Kenya',-1.29,36.82],['Cape Town, South Africa',-33.92,18.42],
 ['Dubai, UAE',25.20,55.27],['Riyadh, Saudi Arabia',24.71,46.68],['Karachi, Pakistan',24.86,67.01],['Delhi, India',28.61,77.21],
 ['Chennai, India',13.08,80.27],['Dhaka, Bangladesh',23.81,90.41],['Bangkok, Thailand',13.76,100.50],['Singapore',1.35,103.82],
 ['Jakarta, Indonesia',-6.21,106.85],['Manila, Philippines',14.60,120.98],['Beijing, China',39.90,116.41],['Shanghai, China',31.23,121.47],
 ['Seoul, South Korea',37.57,126.98],['Tokyo, Japan',35.68,139.69],['Ulaanbaatar, Mongolia',47.92,106.92],['Darwin, Australia',-12.46,130.84],
 ['Perth, Australia',-31.95,115.86],['Sydney, Australia',-33.87,151.21],['Melbourne, Australia',-37.81,144.96],['Auckland, New Zealand',-36.85,174.76],
 ['Dakar, Senegal',14.72,-17.47],['Addis Ababa, Ethiopia',9.03,38.75],['Tehran, Iran',35.69,51.39],['Istanbul, Türkiye',41.01,28.98],
].map(([name, latitude, longitude], index) => ({ id: `weather-${index}`, name, latitude, longitude }));

export function weatherURL() {
 const params = new URLSearchParams({
  latitude: SITES.map(site => site.latitude).join(','), longitude: SITES.map(site => site.longitude).join(','),
  current: 'temperature_2m,precipitation', hourly: 'temperature_2m,precipitation',
  past_hours: '6', forecast_hours: '1', timezone: 'GMT', timeformat: 'unixtime', temperature_unit: 'celsius', precipitation_unit: 'mm',
 });
 return `https://api.open-meteo.com/v1/forecast?${params}`;
}
export function parseWeather(payload) {
 if (!Array.isArray(payload) || payload.length !== SITES.length) throw new Error('Incomplete multi-location weather feed');
 return payload.flatMap((data, index) => {
  const current = data.current;
  if (data.current_units?.temperature_2m !== '°C' || data.current_units?.precipitation !== 'mm') throw new Error('Unexpected weather units');
  if (!Number.isFinite(current?.temperature_2m) || !Number.isFinite(current?.precipitation) || current.precipitation < 0 || !Number.isFinite(current.time) || !Number.isFinite(current.interval) || current.interval <= 0) return [];
  const history = (data.hourly?.time || []).flatMap((time, i) => {
   const temperature = data.hourly.temperature_2m?.[i];
   const precipitation = data.hourly.precipitation?.[i];
   return Number.isFinite(time) && time <= current.time && Number.isFinite(temperature) && Number.isFinite(precipitation) && precipitation >= 0 ? [{ time: time * 1000, temperature, precipitation }] : [];
  }).slice(-6);
  return [{ ...SITES[index], temperature: current.temperature_2m, precipitation: current.precipitation, interval: current.interval, time: current.time * 1000, history }];
 });
}
