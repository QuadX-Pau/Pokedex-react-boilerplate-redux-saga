/**
 *
 * Pokedex
 *
 */

import { Grid, makeStyles } from '@material-ui/core';
import React, { memo, useState } from 'react';
import {
  getAllPokemonAction,
  getPokemonAction,
} from './actions';
import { makeSelectAllPokemon, makeSelectPokemon } from './selectors';

import CenteredSection from './CenteredSection';
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

const useStyles = makeStyles({
  searchBar:{
    textAlign: 'left',
    padding: '5px',
    marginBottom: '20px',
    boder: '1px solid #ffffff',
    borderRadius: '10px',
    minHeight: '5vh',
    '@media all': {
      minWidth: '30vw',
    },
  },
});

export function Pokedex(props) {
  useInjectReducer({ key: 'pokedex', reducer });
  useInjectSaga({ key: 'pokedex', saga });

  const classes = useStyles();

  const {
    getAllPokemon,
    allPokemons,
    getPokemon,
    pokemon,
  } = props;

  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };
  
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
      <div style={{ 
        borderBottom: '1px solid #efefef', 
        marginBottom: '20px',
        }}>
        <input
        className={classes.searchBar}
          type="text"
          placeholder="Search Pokémon..."
          value={searchInput}
          onChange={handleSearchChange}
        />
      </div>
      <Grid container spacing={2}>
        {allPokemons
          .filter((pokemons) =>
            pokemons.name
              .toLowerCase()
              .includes(searchInput.toLowerCase())
          )
          .map((pokemons) => (
            <Grid item xs={12} sm={6} md={3} key={pokemons.name}>
              <PokemonList
                id={getPokemonId(pokemons.url)}
                name={pokemons.name.charAt(0).toUpperCase() + pokemons.name.slice(1)}
                getPokemon={getPokemon}
                pokemon={pokemon}
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
