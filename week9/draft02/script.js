


async function findISS() {

  const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
  const data = await response.json();
  

  console.log(data);
  console.log(data.latitude);
  console.log(data.longitude);

} 

findISS();