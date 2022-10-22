const request = require('request');

const breedName = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {
  // request data from search query with search query
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, responce, body) => {
    if (error) {
      console.log('ERROR', error);
    }
    const data = JSON.parse(body);
    let desc = "";
    if (data[0]) {
      desc = data[0].description;
    } else {
      desc = null;
      error = 'Breed not found!';
    }
    //data[0] ? desc = data[0].description : desc = null;
    callback(error, desc);
  });
};

module.exports = { fetchBreedDescription };