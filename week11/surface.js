// Even/odd polygon fill matches the same Natural Earth land rings used by the texture.
function insideRing(longitude,latitude,ring) {
 let inside=false;
 for(let i=0,j=ring.length-1;i<ring.length;j=i++){
  const [x,y]=ring[i],[previousX,previousY]=ring[j];
  if((y>latitude)!==(previousY>latitude)&&longitude<(previousX-x)*(latitude-y)/(previousY-y)+x)inside=!inside;
 }
 return inside;
}
export function classifySurface(point,polygons) {
 if(!Number.isFinite(point?.latitude)||!Number.isFinite(point?.longitude)||Math.abs(point.latitude)>90||Math.abs(point.longitude)>180)return 'unknown';
 let inlandWater=false;
 for(const polygon of polygons){
  if(!polygon.length||!insideRing(point.longitude,point.latitude,polygon[0]))continue;
  if(polygon.slice(1).some(ring=>insideRing(point.longitude,point.latitude,ring)))inlandWater=true;
  else return 'land';
 }
 return inlandWater?'inland-water':'ocean';
}

export function getOceanStory(sea) {
 const available=Number.isFinite(sea?.value);
 const rising=available&&sea.value>0;
 const phrases=rising?[
  'That’s the ocean!\nThe water is rising!',
  'Splash! You found the ocean.\nMy seas are slowly rising.',
  'You found my blue ocean!\nTake a look at the sea-level record.'
 ]:[
  'That’s the ocean!\nLet’s take a closer look at my waters.',
  'Splash! You found my blue ocean.'
 ];
 let observation='Global sea-level observation is unavailable.';
 if(available){
  const date=/^\d{4}-(0[1-9]|1[0-2])$/.test(sea.date||'')?new Date(sea.date+'-01T00:00:00Z').toLocaleDateString('en-US',{month:'short',year:'numeric',timeZone:'UTC'}):'Date unavailable';
  observation=`Global mean sea level: ${sea.value>=0?'+':''}${sea.value.toFixed(1)} mm since 1993 · ${date}${sea.saved?' · saved observation':''}`;
 }
 return {phrases,observation};
}
