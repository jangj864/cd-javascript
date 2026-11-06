# earth, lately.

Open `index.html` directly, or serve the repository with `python3 -m http.server`.
The checked-in `app.js` is a classic-script bundle so the face also works on `file://`.
The blue globe and facial features are rendered in Three.js. The local Earth texture is embedded in the bundle. A separate translucent yellow/orange/red atmospheric layer represents temperature; the globe stays blue. No body, hair or cheek ornaments remain. Live access depends on internet and source CORS policies.

Edit `script.js`, `climate.js`, `globe.js`, `sound.js`, `style.css`, and `index.html`.
After changing JavaScript, rebuild with esbuild (install it outside this repository or use an existing installation):

```sh
esbuild week11/script.js --bundle --format=iife --target=es2020 --loader:.jpg=dataurl --minify --legal-comments=linked --outfile=week11/app.js
```

Temperature: NASA GISTEMP v4, monthly global land-ocean anomalies versus 1951–1980.
The bundled dated observation is September 2026, +1.38°C; August was +1.42°C.
Sea level: NASA Earth Indicator, +115.8 ±4.0 mm since 1993, October 2026; a dated observation, not a live tide.
Both were checked against the original sources on November 5, 2026. Direct refresh is attempted daily; dated values remain if access fails.
Rain: Open-Meteo current-model precipitation at 36 latitude/longitude sample points, weighted by latitude-band area and normalized to mm/hour. This is a coarse estimate, not an official global mean.
Quakes: USGS past-day catalog. Counts in two adjacent one-hour windows drive the shake; stale data is never treated as a current increase.

Heat, shaking and tears run together from the readings. Expressions ease between watery eyes, flowing tears and sobbing, with continuous streams following the cheeks. Earthquake-count increases still drive intermittent head shaking. Drag gently left or right; manual turns are limited to ±20° to keep the face visible. Double-click or Home centres the face. Automatic quake shaking is preserved within a frontal range. The default view shows only the globe and face, framed by a teal disc, illustrated clouds and a few stars on the black page. Click the bubble to cycle through phrases related to the active reactions. Audio is opt-in. Reduced-motion settings keep automatic movement still.
Three.js uses the retained `vendor/THREE-LICENSE.txt`. The existing Earth texture is from the Three.js examples. Class exercise folders remain independent.
