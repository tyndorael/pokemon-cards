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
    fetch('https://api.pokemontcg.io/v1/cards?name=raichu')
      .then(response => response.json())
      .then(data => {
        this.setState({ cards: data.cards })
      });
  }

  render() {
    const { searchField, cards } = this.state;
    const filteredCards = cards.filter(card =>
      card.set.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="search cards by set"
          handleChange={e => this.setState({ searchField: e.target.value })}/>
        <CardList cards={filteredCards} />
      </div>
    );
  }
}

export default App;
