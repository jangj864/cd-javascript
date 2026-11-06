# earth, lately.

Open `index.html` directly, or serve the repository with `python3 -m http.server`.
The checked-in `app.js` is a classic-script bundle so the face also works on `file://`.
The blue globe and facial features are rendered in Three.js. The rounded illustrated continents are drawn locally on a canvas texture, with restrained procedural relief and tonal variation. Eyes and facial marks use shallow, matte surfaces to match the terrain; no satellite photograph is used. A separate translucent yellow/orange/red atmospheric layer represents temperature; the globe stays blue. No body, ears, hair or cheek ornaments remain. Live access depends on internet and source CORS policies.

Edit `script.js`, `climate.js`, `globe.js`, `sound.js`, `style.css`, and `index.html`.
After changing JavaScript, rebuild with esbuild (install it outside this repository or use an existing installation):

```sh
esbuild week11/script.js --bundle --format=iife --target=es2020 --minify --legal-comments=linked --outfile=week11/app.js
```

Temperature: NASA GISTEMP v4, monthly global land-ocean anomalies versus 1951–1980.
The bundled dated observation is September 2026, +1.38°C; August was +1.42°C.
Sea level: NASA Earth Indicator, +115.8 ±4.0 mm since 1993, October 2026; a dated observation, not a live tide.
Both were checked against the original sources on November 5, 2026. Direct refresh is attempted daily; dated values remain if access fails.
Rain: Open-Meteo current-model precipitation at 36 latitude/longitude sample points, weighted by latitude-band area and normalized to mm/hour. This is a coarse estimate, not an official global mean.
Quakes: USGS past-day catalog. Counts in two adjacent one-hour windows drive the shake; stale data is never treated as a current increase.

Heat, shaking and tears run together from the readings. Expressions ease between watery eyes, flowing tears and sobbing, with continuous streams following the cheeks. Earthquake-count increases drive continuous differences in head-shake speed, angle and burst duration, with eased starts and stops. Higher temperature anomalies thicken and brighten the yellow/orange/red rim while retaining the blue ocean. Increasing water readings broaden and lengthen the streams, accelerate their flow, narrow the eyes and open the mouth into sobbing; the streams attach to the moving lower eyelids and dissolve into the ocean. The pupils follow the pointer. The entire face eases in the same direction with subtle translation and tilt. There is no click-and-drag, double-click or keyboard rotation control. Automatic quake shaking is preserved within a frontal range. The default view shows only the globe and face, framed by a sparse scattering of stars on the black page, without a surrounding background disc. Click the bubble to cycle through phrases related to the active reactions. Audio is opt-in. Reduced-motion settings keep automatic movement still.
Three.js uses the retained `vendor/THREE-LICENSE.txt`. Continent paths are drawn in code. Class exercise folders remain independent.
