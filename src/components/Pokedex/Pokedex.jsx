import React from 'react';
import { BASE_URL } from '../../helpers/helpers';
import { filterOutDuplicates, getPokemonData, getGroupDetails } from '../../helpers/pokemonHelpers';
import Featured from '../Featured/Featured';
import Searchbar from '../Searchbar/Searchbar';

import './Pokedex.scss';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      featured: null,
      previous: null,
      next: null,
      count: 0,
      isLoading: true
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
    const featuredIndex = Math.floor(Math.random() * detailedPokemon.length);

    this.setState(prevState => ({
      ...data,
      results: [...prevState.results, ...detailedPokemon],
      featured: detailedPokemon[featuredIndex],
      isLoading: false
    }))
  }

  render() {
    return (
      <div className="Pokedex">
        {
          this.state.isLoading ? <h1>Loading...</h1>
            : <Featured {...this.state.featured} />
        }

        <Searchbar />
        {/* <button onClick={this.fetchPrevGroup}>Prev</button> */}
        {/* <button onClick={this.fetchNextGroup}>Next</button> */}
      </div>
    );
  }
}

export default Pokedex;
