import React, { Component } from 'react';
import './App.css';
import { Heading , Heading2 } from './Head';
import { Image1 } from './img';
import { Cards } from './cards'
import { Footer } from './foot'

class App extends Component {

handleClick = () => {
  alert("Don't worry about the color change... i know you like this picture");

}

  render() {
    return (
      <div>
        <Image1/>
        <Heading/>
        <Heading2/>
        <Cards/>
        <Footer/>
      </div>
    );
  }
}

// all hover animations where done in css

export default App;
