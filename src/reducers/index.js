import { combineReducers } from 'redux';

import BreedSearchReducer from './BreedSearchReducer';
import TopBreedsReducer from './TopBreedsReducer';
import BreedsReducer from './BreedsReducer';

export default combineReducers({
  BreedsReducer,
  BreedSearchReducer,
  TopBreedsReducer
});
