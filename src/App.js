import React from 'react';
import Pokedex from './components/Pokedex/Pokedex';
import Header from './components/Header/Header';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Pokedex />

    </div>
  );
}

export default App;
