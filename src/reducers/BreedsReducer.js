import { SEARCH_BREED, LOADING_BREED_SEARCH, ERROR_BREED_SEARCH } from '../types/BreedsTypes';

const INITIAL_STATE = {
  searchResults: [],
  searchLoading: false,
  searchErrors: false,
  breeds: [],
};

const BreedsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_BREED:
      return { ...state, searchResults: action.payload, searchLoading: false, searchErrors: false };
    case LOADING_BREED_SEARCH:
      return { ...state, searchLoading: true };
    case ERROR_BREED_SEARCH:
      return { ...state, searchErrors: true };
    default:
      return state;
  }
};

export default BreedsReducer;
