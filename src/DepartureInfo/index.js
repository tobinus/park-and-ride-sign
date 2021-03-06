import React from 'react';
import styles from './DepartureInfo.css';
import DepartureEntry from '../DepartureEntry';

export default function DepartureInfo({departures}) {
  const maybeDepartures = departures ? departures : [];
  const departureList = maybeDepartures.map(({type, time, line, destination, id}) =>
    <DepartureEntry
      type={type}
      time={time}
      line={line}
      destination={destination}
      key={id}
    />
  );

  return <main className={styles.list}>
    <table className={styles.table}>
      <tbody>
        {departureList}
      </tbody>
    </table>
  </main>
}
