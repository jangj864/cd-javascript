console.log('1: before')

setTimeout(() => {
  console.log('2: inside the timeout')
}, 2000)

console.log('3: after')

const result = fetch('api.wheretheisshe.at/v1/satellites/25544');
console.log(result)