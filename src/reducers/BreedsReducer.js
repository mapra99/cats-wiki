import { SEARCH_BREED } from '../types/BreedsTypes';

const INITIAL_STATE = {
  searchResults: [],
  breeds: [],
};

const BreedsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_BREED:
      return { ...state, searchResults: action.payload };
    default:
      return state;
  }
};

export default BreedsReducer;
