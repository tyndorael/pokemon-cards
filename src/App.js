import React, { Component } from "react";

import { SearchBox } from "./components/search-box/search-box.component";
import { CardList } from "./components/card-list/card-list.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      cards: []
    };
  }

  componentDidMount() {
    fetch("https://api.pokemontcg.io/v1/cards?name=pikachu")
      .then(response => response.json())
      .then(data => {
        this.setState({ cards: data.cards });
      });
  }

  searchCardsByPokemon = name => {
    fetch(`https://api.pokemontcg.io/v1/cards?name=${name}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ cards: data.cards });
      });
  };

  // eslint-disable-next-line no-sequences
  debounce = (a, b, c) => {
    var d, e;
    return function() {
      function h() {
        d = null;
        c || (e = a.apply(f, g));
      }
      var f = this,
        g = arguments;
      return (
        clearTimeout(d),
        (d = setTimeout(h, b)),
        c && !d && (e = a.apply(f, g)),
        e
      );
    };
  };

  // arrow function do context binding automatically
  handleChange = this.debounce(e => {
    this.setState({ searchField: e }, () => {
      if (this.state.searchField.length > 2) {
        this.searchCardsByPokemon(this.state.searchField);
      }
    });
  }, 1000);

  render() {
    const { cards } = this.state;

    return (
      <div className="App">
        <h1>Pokemon Cards</h1>
        <SearchBox
          placeholder="search cards by set"
          handleChange={e => {
            this.handleChange(e.target.value);
          }}
        />
        <CardList cards={cards} />
      </div>
    );
  }
}

export default App;
