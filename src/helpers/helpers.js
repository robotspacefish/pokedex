import { TYPES } from './pokemonHelpers';

export const BASE_URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
const LENGTH = BASE_URL.length;

export function isEmpty(arr) {
  return arr.length === 0;
}

export function createIDFromUrl(url) {
  return url.substring(LENGTH + 1, url.length - 1)
}

export function findById(name, allPokemon) {
  return allPokemon.find(p => p.name === name)
}

export function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1);
}

export function convertWeight(weight) {
  // convert from hectograms to lbs
  return (weight / 4.5359237).toFixed(1);

}

export function shortenStatName(stat) {
  if (stat.length < 3) return stat.toUpperCase();

  if (stat.includes('-')) {
    let statArray = stat.split('-');
    let newStat = statArray[0].substring(0, 2) + '-' + statArray[1][0];

    return newStat.toUpperCase();
  }

  return stat.substring(0, 3).toUpperCase();
}

export function convertHeight(height) {
  // decimeter to ft
  return (height / 3.048).toFixed(1);
}

export function getColor(p) {
  return TYPES[p.types[0].type.name];
}