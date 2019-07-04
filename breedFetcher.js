const request = require('request');
//const args = process.argv.slice(2);

const fetchBreedDescription = function(breedname, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedname}`, (error, response, body) => {
    
    const data = JSON.parse(body);
    if (data.status === 404) {
      callback(`fur-oh-fur page not found...`, null);
      //return;
    } else if (body === "[]") {
      callback(`Error ❌ ${breedname} does not exist in our database`, null);
      //return;
    } else {
      callback(null, data[0].description);
    }
    
  });
  
};

module.exports = { fetchBreedDescription };

