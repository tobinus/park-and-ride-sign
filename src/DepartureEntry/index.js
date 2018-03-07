import React from 'react';

import trainIcon from './train.gif';
import busIcon from './bus.gif';

import styles from './DepartureEntry.css';

export default function DepartureEntry({type, time, line, destination, className}) {
  let icon = null;
  if (type === 'bus') {
    icon = busIcon;
  } else if (type === 'train') {
    icon = trainIcon;
  } else {
    throw new Error('Unknown DepartureEntry type ' + type);
  }

  return <div className={className}>
    <span className={styles.icon}>
      <img src={icon} alt={type}/>
    </span>

    <span className={styles.linenumber}>
      {line}
    </span>

    <span className={styles.destination}>
      {destination}
    </span>

    <span className={styles.time}>
      {time} min
    </span>
  </div>;
}
