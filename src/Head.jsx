import React, { Component } from 'react';


export class Heading extends Component {
  render() {
    return (
      <div >
        <h1 className="head">{this.props.heading}</h1>
      </div>
    );
  }
}
