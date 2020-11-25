import { FETCH_TOP_BREEDS, LOADING_TOP_BREEDS, ERROR_TOP_BREEDS } from '../types/BreedsTypes';

const INITIAL_STATE = {
  topResults: [],
  loading: false,
  errors: false,
  finished: false
};

const TopBreedsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TOP_BREEDS:
      return { ...state, topResults: action.payload, loading: false, errors: false, finished: true };
    case LOADING_TOP_BREEDS:
      return { ...state, loading: true, finished: false };
    case ERROR_TOP_BREEDS:
      return { ...state, loading: false, errors: true, finished: false };
    default:
      return state;
  }
};

export default TopBreedsReducer;
