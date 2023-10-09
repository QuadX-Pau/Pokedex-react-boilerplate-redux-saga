import A from './A';
import { FormattedMessage } from 'react-intl';
import HeaderLink from './HeaderLink';
import Img from './Img';
import NavBar from './NavBar';
import Pokedex from './Pokedex.png';
import React from 'react';
import messages from './messages';

function Header() {
  return (
    <div>
      <A href="https://www.reactboilerplate.com/">
        <Img src={Pokedex} alt="react-boilerplate - Logo" />
      </A>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
