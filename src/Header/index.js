import React from 'react';
import busstation from './busstasjon.gif';
import trainstation from './togterminal.gif';

export default function Header({type, name}) {
  let symbol;
  if (type === 'train') {
    symbol = trainstation;
  } else if (type === 'bus') {
    symbol = busstation;
  } else {
    throw new Error('Header cannot recognize type ' + type);
  }

  return <header>
    <img src={symbol} alt="Busstasjon" />
    {name}
  </header>;
}
