import React, { Component } from 'react';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb'
import Roulette from './state-drills/Roulette'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello World drill</h2>
        <HelloWorld />
        <h2>Bomb drill</h2>
        <Bomb />
        <h2>Roulette</h2>
        <Roulette />
      </div>
    );
  }
}

export default App;