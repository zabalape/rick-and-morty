const axios = require("axios");

const getCharById = (response, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data}) => {
      return {
        id: id,
        name: data.name,
        status: data.status,
        species: data.species,
        gender: data.gender,
        origin: data.origin,
        image: data.image,
      };
    })
    .then((character) => {
      response.writeHead(200, { "Content-type": "application/json" });
      response.end(JSON.stringify(character));
    })
    .catch((error) => {
      response.writeHead(500, { "Content-type": "text/plain" });
      response.end(error.message);
    });
};

module.exports = getCharById;
