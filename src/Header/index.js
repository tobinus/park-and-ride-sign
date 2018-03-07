import React from 'react';
import busstasjon from './busstasjon.gif';

export default function Header(props) {
  return <header>
    <img src={busstasjon} alt="Busstasjon" />
    Melhus innfartsparkering
  </header>;
}
