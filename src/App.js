import React, { Component } from 'react';

import { SearchBox } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
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

  searchCardsByPokemon = name => {
    fetch(`https://api.pokemontcg.io/v1/cards?name=${name}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ cards: data.cards })
      });
  }

  // arrow function do context binding automatically
  handleChange = e => {
    this.setState({ searchField: e.target.value }, () => {
      if (this.state.searchField.length > 2) {
        this.searchCardsByPokemon(this.state.searchField);
      }
    });
  }

  render() {
    const { cards } = this.state;

    return (
      <div className="App">
        <h1>Pokemon Cards</h1>
        <SearchBox
          placeholder="search cards by set"
          handleChange={this.handleChange} />
        <CardList cards={cards} />
      </div>
    );
  }
}

export default App;
