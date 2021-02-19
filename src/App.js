import React from 'react';
import { BASE_URL, findById, isEmpty, createIDFromUrl } from './helpers';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      featured: null,
      prevUrl: null,
      nextUrl: null
    };
  }

  /**
   * Remove pokemon that already exist
   * @param {Array} pokemonToFilter - new pokemon to check for duplicates
   * @param {Array} currentPokemonArray - current pokemon
   * @return {Array} pokemon list without duplicates
   */
  filterNewPokemon(pokemonToFilter, currentPokemonArray) {
    return pokemonToFilter.filter(p => !findById(p.name, currentPokemonArray));
  }

  async fetchPokemon(url) {
    const res = await this.getAllPokemon(url);

    const filteredResults = this.filterNewPokemon(res.results, this.state.pokemon);

    const updatedPokemon = [...this.state.pokemon, ...filteredResults];

    this.setState(() => ({
      pokemon: updatedPokemon,
      prevUrl: res.previous,
      nextUrl: res.next
    }));
  }

  async getAllPokemon(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          resolve(data); // return data for the pokemon api
        })
    });
  }

  componentDidMount() {
    // TODO localstorage
    this.fetchPokemon(BASE_URL);
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
