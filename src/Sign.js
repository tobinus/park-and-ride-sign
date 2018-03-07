import React, { Component } from 'react';
import './Sign.css';
import Header from './Header';
import ParkInfo from './ParkInfo';

class Sign extends Component {
  render() {
    return (
      <div className="App">
        <Header /><ParkInfo parkingSpaces={36}/>
      </div>
    );
  }
}

export default Sign;
