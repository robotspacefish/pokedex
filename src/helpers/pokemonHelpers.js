import { findById } from './helpers';

export const TYPES = {
  normal: '#A8A878',
  fire: '#F0802F',
  water: '#6890F0',
  grass: '#78C850',
  electric: '#F8D02F',
  ice: '#98D8D8',
  ground: '#E0C068',
  flying: '#A890F0',
  poison: '#A040A0',
  fighting: '#C03028',
  psychic: '#F65888',
  dark: '#705848',
  rock: '#B8A038',
  bug: '#A8B820',
  ghost: '#705898',
  steel: '#B8B8D0',
  dragon: '#7038F8',
  fairy: '#F9AEC9'

}

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
  try {
    localStorage.setItem("pokemonState", json);
  } catch (e) {
    console.error("localStorage error:", e)
  }
}

export function retrieveLocalStorage() {
  return JSON.parse(localStorage.getItem("pokemonState"));
}

export function getGroupDetails(data) {
  return Promise.all(data.map(p => {
    return getPokemonData(p.url);
  }))
}

// export async function fetchPokemon(url) {
//   try {
//     const response = await getPokemonData(url);
//     // // make sure this pokemon data doesn't already exist in state
//     // const filteredPokemon = filterOutDuplicates(pokemon.results, this.state.pokemon);

//     // get each pokemon's individual stats
//     // const detailedPokemon = await Promise.all(pokemon.results.map(async p => {
//     //   const pokemon = await getPokemonData(p.url);
//     //   return pokemon;
//     // }))

//     // // combine existing and newly fetched pokemon for state
//     // const updatedPokemon = [...this.state.pokemon, ...detailedPokemon];
//     // debugger
//     // return {
//     //   pokemon: detailedPokemon,
//     //   prevUrl: pokemon.previous,
//     //   nextUrl: pokemon.next,
//     //   count: pokemon.count
//     // };

//     return response;

//   } catch (err) {
//     console.log('Something went wrong...', err)
//   }
// }
