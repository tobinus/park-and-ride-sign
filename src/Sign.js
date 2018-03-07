import React, { Component } from 'react';
import styles from './Sign.css';
import Header from './Header';
import ParkInfo from './ParkInfo';
import DepartureInfo from './DepartureInfo';
import Attributions from './Attributions';

const departures = [
  {
    type: 'bus',
    time: 3,
    line: 5,
    destination: 'Dragvoll/Lohove',
    id: 123,
  },
  {
    type: 'bus',
    time: 6,
    line: 4,
    destination: 'Lade',
    id: 234,
  },
  {
    type: 'train',
    time: 11,
    line: 'NSB',
    destination: 'Trondheim S',
    id: 345,
  },
];


class Sign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departures: departures,
      parkingSpaces: 11,
      name: 'Melhus skysstasjon',
      type: 'bus',
    };
  }
  render() {
    return (
      <div className={styles.page}>
        <div className={styles.sign}>
          <Header name={this.state.name} type={this.state.type} parkingSpaces={this.state.parkingSpaces}/>
          <DepartureInfo departures={this.state.departures}/>
        </div>
        <footer className={styles.footer}>
          <Attributions />
        </footer>
      </div>
    );
  }
}

export default Sign;
