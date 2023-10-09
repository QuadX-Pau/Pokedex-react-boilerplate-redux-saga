import { GET_POKEMON, GET_POKEMON_SUCCESS } from './constants';

/*
 *
 * Pokedex reducer
 *
 */
import produce from 'immer';

export const initialState = {
  loading: false,
  pokemonData: {},
};

/* eslint-disable default-case, no-param-reassign */
const pokedexReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_POKEMON:
        draft.loading = true;
        break;
      case GET_POKEMON_SUCCESS:
        draft.loading = false;
        draft.pokemonData = action.pokemon.results.name;
        break;
      case GET_POKEMON:
        draft.loading = false;
        break;
    }
  });

export default pokedexReducer;
