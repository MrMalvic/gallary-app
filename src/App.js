import React, { Component } from 'react';
import './App.css';
import { Heading } from './Head';
import { Button } from './click';
import { Image1 } from './img';
import { Cards } from './cards'

class App extends Component {

  render() {
    return (
      <div>
        {/* I used divs to give each Component a uniform padding and margin */}
        <div className = "picture" >
          <Image1/>
        </div>
        <div className = "center">
          <Heading heading = 'A Journey of a thousand lines of code...'/>
        </div>
        <div className = "center2">
          <h1>You'll need a car.</h1>
        </div>
        <div className = "center2">
        <Cards/>
      </div>
        <hr/> 
        <div className = "center">
          <footer>© Malumbo Mutale 2018</footer>
      </div>
      </div>
    );
  }
}

// all hover animations where done in css

export default App;
