import {FEED_BREED_DATA} from '../types/BreedsTypes';

const INITIAL_STATE = {
  breeds: {},
};

const BreedsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FEED_BREED_DATA:
      return { ...state, breeds: {...state.breeds, ...action.payload}};
    default:
      return state;
  }
};

export default BreedsReducer;
