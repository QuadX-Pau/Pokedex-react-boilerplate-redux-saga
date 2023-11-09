import {
  GET_ALL_POKEMON,
  GET_POKEMON,
} from './constants';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  getAllPokemonErrorAction,
  getAllPokemonSuccessAction,
  getPokemonErrorAction,
  getPokemonSuccessAction,
} from './actions';

function* getAllPokemon() {
  const API_URL = `https://pokeapi.co/api/v2/pokemon/?limit=1001`;
  try {
    const res = yield call(fetch, API_URL);
    const data = yield res.json();
  
    yield put(getAllPokemonSuccessAction(data.results));
  } catch (err) {
    yield put(getAllPokemonErrorAction(err));
  }
}

function* getPokemon(data) {
    const {id} = data;
    const API_URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    try {
      const res = yield call(fetch, API_URL);
      const data = yield res.json();

      yield put(getPokemonSuccessAction(data));
      
    } catch (error) {
      yield put(getPokemonErrorAction(err));
    }
}

export default function* pokedexSaga() {
  yield takeEvery(GET_ALL_POKEMON, getAllPokemon);
  yield takeEvery(GET_POKEMON, getPokemon);
}
