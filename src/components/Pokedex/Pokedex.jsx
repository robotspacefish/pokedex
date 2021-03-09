import React from 'react';
import { BASE_URL } from '../../helpers/helpers';
import { filterOutDuplicates, getPokemonData, getGroupDetails, setLocalStorage, retrieveLocalStorage } from '../../helpers/pokemonHelpers';
import Featured from '../Featured/Featured';
import Searchbar from '../Searchbar/Searchbar';
import Cards from '../Cards/Cards';
import Loader from '../Loader/Loader';

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
      isLoading: true,
      observerTarget: null
    };
  }

  async componentDidMount() {
    const localStorage = retrieveLocalStorage();
    console.log(localStorage)
    if (localStorage && localStorage.results.length > 0) {
      console.log('setting from local storage')
      this.setState({ ...localStorage, isLoading: false })
      return;
    }

    this.observer = new IntersectionObserver((entries, observer) => this.handleObserve(entries, observer));

    this.fetchAndStorePokemon(BASE_URL);

    const featured = Math.floor(Math.random() * this.state.count) + 1;
    const featuredPokemon = await getPokemonData(`https://pokeapi.co/api/v2/pokemon/${featured}/`);
    this.setState({ featured: featuredPokemon });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.results.length !== this.state.results.length) {
      console.log('updating local storage')
      setLocalStorage(this.state);
    }
  }

  fetchNextGroup = () => {
    if (this.state.next) {
      this.fetchAndStorePokemon(this.state.next);
    }
  }

  handleObserve = (entries, observer) => {
    if (!this.state.next) return;
    if (!entries[0].isIntersecting) return;

    const target = entries[0].target

    if (target.id == this.state.observerTarget) {
      observer.unobserve(target);
      this.setState({ isLoading: true }, () => this.fetchNextGroup());
    }
  }

  async fetchAndStorePokemon(url) {
    const data = await getPokemonData(url);
    let detailedPokemon = await getGroupDetails(data.results);

    // TEMP FIX to filter out pokemon when it can't be pulled from API and comes back undefined
    detailedPokemon = detailedPokemon.filter(p => p !== undefined);

    this.setState(prevState => ({
      ...data,
      results: [...prevState.results, ...detailedPokemon],
      isLoading: false,
      observerTarget: detailedPokemon[detailedPokemon.length - 1].id
    }), () => {
      console.log("new observer target:", this.state.observerTarget)
      this.observer.observe(document.getElementById(this.state.observerTarget))
    });
  }

  render() {
    return (
      <div className="Pokedex">
        {
          this.state.isLoading ? <Loader />
            :
            <>
              {this.state.featured && <Featured {...this.state.featured} />}
              <Searchbar />
              <Cards pokemon={this.state.results} />
            </>
        }
      </div>
    );
  }
}

export default Pokedex;
