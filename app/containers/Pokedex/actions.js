/*
 *
 * Pokedex actions
 *
 */

import { GET_POKEMON, GET_POKEMON_ERROR, GET_POKEMON_SUCCESS } from './constants';

export function getPokemonAction() {
  return {
    type: GET_POKEMON,
  };
}

export function getPokemonSuccessAction(pokemon) {
  return {
    type: GET_POKEMON_SUCCESS,
    pokemon,
  };
}

export function getPokemonErrorAction(err) {
  return {
    type: GET_POKEMON_ERROR,
    err,
  };
}
