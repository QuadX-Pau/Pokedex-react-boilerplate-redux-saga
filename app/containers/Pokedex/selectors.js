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

const makeSelectPokemon = () =>
  createSelector(
    selectPokedexDomain,
    substate => substate.pokemonData,
  );

export default makeSelectPokemon;
export { selectPokedexDomain };
