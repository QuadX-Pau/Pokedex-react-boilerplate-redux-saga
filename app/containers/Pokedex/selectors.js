import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pokedex state domain
 */

const selectPokedexDomain = state => state.pokedex || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Pokedex
 */

const makeSelectAllPokemon = () =>
  createSelector(
    selectPokedexDomain,
    substate => substate.allPokemons,
  );

const makeSelectPokemon = () =>
  createSelector(
    selectPokedexDomain,
    substate => substate.pokemon,
  );

// export default makeSelectPokedex;
export { selectPokedexDomain, makeSelectAllPokemon, makeSelectPokemon};
