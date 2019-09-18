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
        <CardList name='list of pokemon cards'>
          {
            this.state.cards.map(card => <h1 key={card.id}> {card.name} </h1>)
          }
        </CardList>
      </div>
    );
  }
}

export default App;
