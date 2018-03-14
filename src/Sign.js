import React, { Component } from 'react';
import styles from './Sign.css';
import Header from './Header';
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
  {
    type: 'bus',
    time: 15,
    line: 36,
    destination: 'Sentrum',
    id: 472,
  },
];


class Sign extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.timerId = null;
    this.interval = 60 * 1000;  // One minute
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

  componentDidMount() {
    this.updateWithServerInfo();
    this.timerId = setInterval(() => this.updateWithServerInfo(), this.interval);
  }

  componentWillUnmount() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
    }
  }

  updateWithServerInfo() {
    // TODO: Fetch information from server, and update state from promise
    this.setState({
      departures: departures,
      parkingSpaces: 11,
      name: 'Melhus skysstasjon',
      type: 'bus',
    });
  }
}

export default Sign;
