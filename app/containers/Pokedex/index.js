/**
 *
 * Pokedex
 *
 */

import React, { memo } from 'react';
import {
  getAllPokemonAction,
  getPokemonAction,
} from './actions';
import { makeSelectAllPokemon, makeSelectPokemon } from './selectors';

import CenteredSection from './CenteredSection';
import { Grid } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import PokemonList from './PokemonList';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import reducer from './reducer';
import saga from './saga';
import { useEffect } from 'react';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

export function Pokedex(props) {
  useInjectReducer({ key: 'pokedex', reducer });
  useInjectSaga({ key: 'pokedex', saga });

  const {
    getAllPokemon,
    allPokemons,
    getPokemon,
    pokemon,
  } = props;

  const getPokemonId = value => {
    return value.split('/')[6];
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  useEffect(() => {
  }, [allPokemons]);


  return (
    <div>
      <Helmet>
        <title>Pokedex</title>
        <meta name="description" content="Description of Pokedex" />
      </Helmet>

      <CenteredSection>
        <Grid container spacing={2}>
          {allPokemons.map((pokemons) => (
            <Grid item xs={12} sm={6} md={3} key={pokemons.name} >
              <PokemonList
                id={getPokemonId(pokemons.url)}
                name={pokemons.name.charAt(0).toUpperCase() + pokemons.name.slice(1)}
                getPokemon={getPokemon}
                pokemon={pokemon}
              // getResetPokemon={getResetPokemon}
              />
            </Grid>
          ))}
        </Grid>
      </CenteredSection>
    </div>
  );
};

Pokedex.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  allPokemons: makeSelectAllPokemon(),
  pokemon: makeSelectPokemon(),
});

function mapDispatchToProps(dispatch) {
  return {
    getAllPokemon: () => {
      dispatch(getAllPokemonAction());
    },
    getPokemon: id => {
      dispatch(getPokemonAction(id));
    },
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Pokedex);
