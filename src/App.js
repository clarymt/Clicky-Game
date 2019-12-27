  
import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
//import Header from "./components/Header";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    cards, 
    score: 0,
    highscore: 0
  };
  
  render() {
    return (
      //add header within wrapper
      <Wrapper>
        {this.state.cards.map(card => (
          <Card
            //clickCount to be built here
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
