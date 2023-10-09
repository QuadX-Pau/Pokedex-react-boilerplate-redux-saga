/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    substate => substate.username,
  );

const makeSelectPokemon = () =>
  createSelector(
    selectHome,
    substate => substate.pokemonData,
  );

export { selectHome, makeSelectUsername, makeSelectPokemon };
