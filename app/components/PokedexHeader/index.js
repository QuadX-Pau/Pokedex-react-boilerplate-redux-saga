import A from './A';
import Img from './Img';
import Pokedex from './Pokedex.png';
import React from 'react';

function Header() {
  return (
    <div>
      <A href="https://pokeapi.co/">
        <Img src={Pokedex} alt="pokedex" />
      </A>
    </div>
  );
}

export default Header;
