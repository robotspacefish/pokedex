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

function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1);
}

function convertWeight(weight) {
  // convert from hectograms to lbs
  return (weight / 4.5359237).toFixed(1);

}

function shortenStatName(stat) {
  if (stat.length < 3) return stat.toUpperCase();

  if (stat.includes('-')) {
    let statArray = stat.split('-');
    let newStat = statArray[0].substring(0, 2) + '-' + statArray[1][0];

    return newStat.toUpperCase();
  }

  return stat.substring(0, 3).toUpperCase();
}

function convertHeight(height) {
  // decimeter to ft

  return (height / 3.048).toFixed(1);
}

export {
  BASE_URL,
  isEmpty,
  createIDFromUrl,
  findById,
  capitalize,
  shortenStatName,
  convertWeight,
  convertHeight
}
