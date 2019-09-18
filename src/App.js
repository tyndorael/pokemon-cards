import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    fetch('https://api.pokemontcg.io/v1/cards?name=pikachu')
      .then(response => response.json())
      .then(data => {
        this.setState({ cards: data.cards })
      });
  }

  render() {
    return (
      <div className="App">
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
