const request = require('request');
const args = process.argv.slice(2);


request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  
  const data = JSON.parse(body);
  if (data.status === 404) {
    console.log(`fur-oh-fur page not found...`);
    return;
  }
  
  if (body === "[]") {
    console.log(`Error ❌ ${args[0]} does not exist in our database`);
    return;
  }
  
  console.log(data[0].description);
  
});

