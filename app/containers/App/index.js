/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Route, Switch } from 'react-router-dom';

import Footer from 'components/Footer';
import GlobalStyle from '../../global-styles';
import { Helmet } from 'react-helmet';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Pokedex from 'containers/Pokedex/Loadable';
import PokedexHeader from 'components/PokedexHeader';
import React from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
  max-width: calc(1080px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <PokedexHeader />
      <Switch>
        <Route path="/" component={Pokedex} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
