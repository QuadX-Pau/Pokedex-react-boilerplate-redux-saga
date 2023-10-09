import { call, put, takeLatest } from 'redux-saga/effects';
import { getPokemonErrorAction, getPokemonSuccessAction } from './actions';

import { GET_POKEMON } from './constants';

function* getPokemon() {
  try {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';
    const params = {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
      },
    };
    const pokemonData = yield call(request, url, params);
    yield put(getPokemonSuccessAction(pokemonData));
  }catch (err) {
    yield put(getPokemonErrorAction(err));
  }
}

// Individual exports for testing
export default function* pokedexSaga() {
  yield takeLatest(GET_POKEMON, getPokemon);
  // See example in containers/HomePage/saga.js
}
