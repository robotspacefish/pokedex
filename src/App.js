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
    const res = await getPokemonData(url);

    // const filteredResults = filterOutDuplicates(res.results, this.state.pokemon);

    // debugger
    // const updatedFilteredResults = filteredResults.map(res => {
    //   return this.fetchSinglePokemon(res.url);
    // })

    // const updatedPokemon = [...this.state.pokemon, ...updatedFilteredResults];
    this.setState(() => ({
      pokemon: res.results,
      prevUrl: res.previous,
      nextUrl: res.next,
      count: res.count
    }), () => {
      setLocalStorage(this.state);
    });
  }

  async fetchSinglePokemon(url) {
    const res = await getPokemonData(url);
    return res.results;
    // const updatedPokemon = this.state.pokemon(p => (
    //   (p.name === res.results.name) ? res.results : p
    // ))

    // this.setState(() => ({ pokemon: updatedPokemon }));
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
