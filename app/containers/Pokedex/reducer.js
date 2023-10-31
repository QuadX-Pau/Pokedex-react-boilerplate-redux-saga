import {
  GET_ALL_POKEMON,
  GET_ALL_POKEMON_ERROR,
  GET_ALL_POKEMON_SUCCESS,
  GET_POKEMON,
  GET_POKEMON_ERROR,
  GET_POKEMON_SUCCESS
} from './constants';

/*
 *
 * Pokedex reducer
 *
 */
import produce from 'immer';

export const initialState = {
  loading: false,
  allPokemons: [],
  pokemon: {},
};

const pokedexReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ALL_POKEMON:
        draft.loading = true;
        break;
      case GET_ALL_POKEMON_SUCCESS:
        draft.loading = false;
        draft.allPokemons = action.allPokemons;
        break;
      case GET_ALL_POKEMON_ERROR:
        draft.loading = false;
        break;
      case GET_POKEMON:
        draft.loading = true;
        break;
      case GET_POKEMON_SUCCESS:
        draft.loading = false;
        draft.pokemon = action.data;
        break;
      case GET_POKEMON_ERROR:
        draft.loading = false;
        break;
    }
  });

export default pokedexReducer;
