const info = document.querySelector('#info');
const latitude = document.querySelector('#latitude');
const longitude = document.querySelector('#longitude');
const country = document.querySelector('#country');

async function findISS() {
    const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    const data = await response.json();

    latitude.textContent = `Latitude: ${data.latitude}`;
    longitude.textContent = `Longitude: ${data.longitude}`;
    
    const left = (data.longitude + 180) / 360 * 100;
    info.style.left = `${left}%`;

    const placeResponse = await fetch(`https://api.wheretheiss.at/v1/coordinates/${data.latitude},${data.longitude}`);
    const place = await placeResponse.json(); 

    if (place.country_code === '??') {
      country.textContent = 'Country: Above the ocean';
      document.body.style.backgroundColor = '#87CEEB';
      document.body.style.color = 'white';
    } else {
      const code = place.country_code; 
      const flag = String.fromCodePoint(127397 + code.charCodeAt(0), 127397 + code.charCodeAt(1));
      document.body.style.backgroundColor = '#90EE90';
      country.textContent = `Above: ${flag} ${code}`;
    }
  }


findISS();
setInterval(findISS, 2000);