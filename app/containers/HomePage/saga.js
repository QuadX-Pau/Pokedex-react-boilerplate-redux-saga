/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { makeSelectPokemon, makeSelectUsername } from 'containers/HomePage/selectors';
import { repoLoadingError, reposLoaded } from 'containers/App/actions';

import { GET_POKEMONS } from './constants';
import { LOAD_REPOS } from 'containers/App/constants';
import { getPokemonsErrorAction } from './actions';
import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* getPokemons() {
  // Select username from store
  const pokemonData = yield select(makeSelectPokemon());
  const API_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonData}`;
  console.log(API_URL);

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, API_URL);
    yield put(getPokemonsSuccessAction(data, pokemon));
  } catch (err) {
    yield put(getPokemonsErrorAction(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(GET_POKEMONS, getPokemons);
}
