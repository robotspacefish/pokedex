import { findById } from './helpers';

/**
 * Remove pokemon that already exist
 * @param {Array} pokemonToFilter - new pokemon to check for duplicates
 * @param {Array} currentPokemonArray - current pokemon
 * @return {Array} pokemon list without duplicates
**/
export function filterOutDuplicates(pokemonToFilter, currentPokemonArray) {
  return pokemonToFilter.filter(p => !findById(p.name, currentPokemonArray));
}

export async function getPokemonData(url) {
  try {
    console.log('getting pokemon')
    const response = await fetch(url);
    const pokemon = await response.json();

    return pokemon;

  } catch (e) {
    console.error("Error: Bad Url:", url)
  }
}

export function setLocalStorage(pokemonState) {
  const json = JSON.stringify(pokemonState);
  localStorage.setItem("pokemonState", json);
}

export function retrieveLocalStorage() {
  return JSON.parse(localStorage.getItem("pokemonState"));
}