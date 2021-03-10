import React from 'react';
import Pokedex from './components/Pokedex/Pokedex';
import Header from './components/Header/Header';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Pokedex />
      {/* <BackToTopButton /> */}
    </div>
  );
}

export default App;
