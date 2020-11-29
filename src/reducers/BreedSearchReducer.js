import { SEARCH_BREED, LOADING_BREED_SEARCH, ERROR_BREED_SEARCH, RESET_BREED_SEARCH } from '../types/BreedsTypes';

const INITIAL_STATE = {
  searchResults: [],
  searchLoading: false,
  searchErrors: false,
  searchFinished: false
};

const BreedSearchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_BREED:
      return { ...state, searchResults: action.payload, searchLoading: false, searchErrors: false, searchFinished: true };
    case LOADING_BREED_SEARCH:
      return { ...state, searchLoading: true, searchFinished: false };
    case ERROR_BREED_SEARCH:
      return { ...state, searchLoading: false, searchErrors: true, searchFinished: false };
    case RESET_BREED_SEARCH:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default BreedSearchReducer;
