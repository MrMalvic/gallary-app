import React, { Component } from 'react';
import './App.css';
import { Heading , Heading2 } from './Head';
import { Image1 } from './img';
import { Cards } from './cards'
import { Footer } from './foot'

class App extends Component {
// constructor(props){
//   super(props);
// }

  render() {
    return (
      <div>
        <Image1/>
        <Heading/>
        <hr/>
        <Heading2/>
        <Cards/>
        <hr/>
        <Footer/>
      </div>
    );
  }
}

// all hover animations where done in css

export default App;
