import A from './A';
import Img from './Img';
import Pokemon from './Pokemon.png';
import React from 'react';

function Header() {
  return (
    <div>
      <A to="/">
        <Img src={Pokemon} alt="Pokemon" />
      </A>
    </div>
  );
}

export default Header;
