import React, { Component } from 'react';
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
      this.setState({ cards: data.cards})
    });
  }

  render() {
    return (
      <div className="App">
        {
          this.state.cards.map(card => <h1 key={card.id}> {card.name} </h1>)
        }
      </div>
    );
  }
}

export default App;
