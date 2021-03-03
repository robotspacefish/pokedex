import React from 'react';
import { BASE_URL } from '../../helpers/helpers';
import { filterOutDuplicates, getPokemonData, getGroupDetails } from '../../helpers/pokemonHelpers';
import Featured from '../Featured/Featured';
import Searchbar from '../Searchbar/Searchbar';
import Cards from '../Cards/Cards';

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

    // get featured pokemon from already fetched group or fetch new pokemon if # is higher than what is stored
    const featured = Math.floor(Math.random() * data.count) + 1;
    let featuredPokemon;
    if (featured < 20) featuredPokemon = detailedPokemon.find(p => p.id === featured);
    else {
      console.log('getting featured pokemon #', featured)
      featuredPokemon = await getPokemonData(`https://pokeapi.co/api/v2/pokemon/${featured}/`);
    }

    this.setState(prevState => ({
      ...data,
      results: [...prevState.results, ...detailedPokemon],
      featured: featuredPokemon,
      isLoading: false
    }))
  }

  render() {
    return (
      <div className="Pokedex">
        {
          this.state.isLoading ? <h1>Loading...</h1>
            :
            <>
              <Featured {...this.state.featured} />
              <Searchbar />
              <Cards pokemon={this.state.results} />
            </>
        }

        {/* <button onClick={this.fetchPrevGroup}>Prev</button> */}
        {/* <button onClick={this.fetchNextGroup}>Next</button> */}
      </div>
    );
  }
}

export default Pokedex;
