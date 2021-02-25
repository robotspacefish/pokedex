import { findById } from './helpers';

/**
 * Remove pokemon that already exist
 * @param {Array} pokemonToFilter - new pokemon to check for duplicates
 * @param {Array} currentPokemonArray - current pokemon
 * @return {Array} pokemon list without duplicates
**/
export function filterNewPokemon(pokemonToFilter, currentPokemonArray) {
  return pokemonToFilter.filter(p => !findById(p.name, currentPokemonArray));
}

export async function getPokemonData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        resolve(data); // return data for the pokemon api
      })
  });
}

export function setLocalStorage(pokemonState) {
  const json = JSON.stringify(pokemonState);
  localStorage.setItem("pokemonState", json);
}

export function retrieveLocalStorage() {
  return JSON.parse(localStorage.getItem("pokemonState"));
}