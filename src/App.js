import React from 'react';
import { BASE_URL } from './helpers/helpers';
import { filterOutDuplicates, getPokemonData, getGroupDetails } from './helpers/pokemonHelpers';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      featured: null,
      previous: null,
      next: null,
      count: 0
    };
  }

  async componentDidMount() {
    this.fetchAndStorePokemon(BASE_URL);
  }

  fetchNextGroup = () => {
    if (this.state.next) {
      this.fetchAndStorePokemon(this.state.next);
    }
  }

  // fetchPrevGroup = () => {
  //   if (this.state.previous) {
  //     const data = getPokemonData(this.state.previous);
  //   }
  // }

  async fetchAndStorePokemon(url) {
    const data = await getPokemonData(url);
    const detailedPokemon = await getGroupDetails(data.results);

    this.setState(prevState => ({
      ...data,
      results: [...prevState.results, ...detailedPokemon]
    }))
  }

  render() {
    return (
      <div className="App">
        {/* <button onClick={this.fetchPrevGroup}>Prev</button> */}
        <button onClick={this.fetchNextGroup}>Next</button>
      </div>
    );
  }
}

export default App;
