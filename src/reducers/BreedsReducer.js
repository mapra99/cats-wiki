import { SEARCH_BREED } from '../types/BreedsTypes';

const INITIAL_STATE = {
  breeds: [],
};

const BreedsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_BREED:
      return { ...state, breeds: action.payload };
    default:
      return state;
  }
};

export default BreedsReducer;
