import React from 'react';
import { BASE_URL } from './helpers/helpers';
import { filterOutDuplicates, getPokemonData, setLocalStorage, retrieveLocalStorage } from './helpers/pokemonHelpers';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      featured: null,
      prevUrl: null,
      nextUrl: null,
      count: 0
    };
  }

  componentDidMount() {
    // check localStorage
    // if there are no pokemon, fetch from BASE_URL
    // if there are some pokemon set those in state
    const pokemonState = retrieveLocalStorage();

    if (pokemonState) {
      console.log('retrieving from local storage')
      this.setState({ ...pokemonState });
    } else {
      console.log('fetching from BASE_URL')
      this.fetchPokemon(BASE_URL);
    }

  }

  async fetchPokemon(url) {
    try {
      const pokemon = await getPokemonData(url);

      // make sure this pokemon data doesn't already exist in state
      const filteredPokemon = filterOutDuplicates(pokemon.results, this.state.pokemon);

      // get each pokemon's individual stats
      const detailedPokemon = await Promise.all(filteredPokemon.map(async p => {
        const pokemon = await getPokemonData(p.url);
        return pokemon;
      }))

      // combine existing and newly fetched pokemon for state
      const updatedPokemon = [...this.state.pokemon, ...detailedPokemon];

      this.setState(() => ({
        pokemon: updatedPokemon,
        prevUrl: pokemon.previous,
        nextUrl: pokemon.next,
        count: pokemon.count
      }), () => {
        setLocalStorage(this.state);
      });
    } catch (err) {
      console.log('Something went wrong...', err)
    }
  }

  fetchNextGroup = () => {
    if (this.state.nextUrl) {
      this.fetchPokemon(this.state.nextUrl)
    }
  }

  fetchPrevGroup = () => {
    if (this.state.prevUrl) {
      this.fetchPokemon(this.state.prevUrl)
    }
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.fetchPrevGroup}>Prev</button>
        <button onClick={this.fetchNextGroup}>Next</button>
      </div>
    );
  }
}

export default App;
