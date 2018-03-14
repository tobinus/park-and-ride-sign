import React from 'react';

import trainIcon from './train.png';
import busIcon from './bus.png';

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

  return <tr className={className}>
    <td className={styles.icon}>
      <img src={icon} alt={type}/>
    </td>

    <td className={styles.linenumber}>
      {line}
    </td>

    <td className={styles.destination}>
      {destination}
    </td>

    <td className={styles.time}>
      {time} min
    </td>
  </tr>;
}
