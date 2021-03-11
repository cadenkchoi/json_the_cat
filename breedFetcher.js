const request = require('request');

// const fetchBreed = function (breedName, callback) {
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    callback(error, null);
  }
});
// }
