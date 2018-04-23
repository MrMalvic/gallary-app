import React, {Component} from 'react';
import road2 from './road2.jpg';


export class Image1 extends Component {
  render() {
    return (
      <div className = "picture" >
    <img src={road2} alt='road' className="picture"/>
    </div>
    )
  }
}
