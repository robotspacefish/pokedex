const BASE_URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
const LENGTH = BASE_URL.length;

function isEmpty(arr) {
  return arr.length === 0;
}

function createIDFromUrl(url) {
  return url.substring(LENGTH + 1, url.length - 1)
}

function findById(name, allPokemon) {
  return allPokemon.find(p => p.name === name)
}

export {
  BASE_URL,
  isEmpty,
  createIDFromUrl,
  findById
}