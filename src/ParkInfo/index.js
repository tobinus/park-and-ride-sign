import React from 'react';
import styles from './ParkInfo.css';
import parkingIcon from './parking.gif';

export default function ParkInfo({parkingSpaces}) {
  let counter;
  let text;
  let textClass;

  if (parkingSpaces === 0) {
    counter = <span>&nbsp;</span>;
    text = 'Fullt';
    textClass = styles.occupied;
  } else {
    // Pad with spaces at start of counter text
    counter = ('  ' + parkingSpaces).slice(-3);
    text = 'Ledig';
    textClass = styles.vacant;
  }

  return <div className={styles['park-info']}>
    <img src={parkingIcon} alt="Parkering" className={styles.symbol}/>
    <span className={styles['num-spaces']}>{counter}</span>
    <span className={textClass}>{text}</span>
  </div>;
}
