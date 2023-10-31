/*
 *
 * Pokedex actions
 *
 */

import {
  GET_ALL_POKEMON,
  GET_ALL_POKEMON_ERROR,
  GET_ALL_POKEMON_SUCCESS,
  GET_POKEMON,
  GET_POKEMON_ERROR,
  GET_POKEMON_SUCCESS,
} from './constants';

export function getAllPokemonAction() {
  return {
    type: GET_ALL_POKEMON,
  };
}

export function getAllPokemonSuccessAction(allPokemons) {
  return {
    type: GET_ALL_POKEMON_SUCCESS,
    allPokemons ,
  };
}

export function getAllPokemonErrorAction(err) {
  return {
    type: GET_ALL_POKEMON_ERROR,
    err,
  };
}

export function getPokemonAction(id) {
  return {
    type: GET_POKEMON,
    id,
  };
}

export function getPokemonSuccessAction(data) {
  return {
    type: GET_POKEMON_SUCCESS,
    data,
  };
}

export function getPokemonErrorAction(err) {
  return {
    type: GET_POKEMON_ERROR,
    err,
  };
}

