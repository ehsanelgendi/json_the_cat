const request = require('request');

const breedName = process.argv[2];

const breedfetch = function(breedName) {
  // request data from search query with search query
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, responce, body) => {
    if (error) {
      console.log('ERROR', error);
    }
    const data = JSON.parse(body);
    //check if there is data print the description if not inform the users
    data[0] ? console.log(data[0].description) : console.log("Breed not found!");
  });
};

breedfetch(breedName);