import { combineReducers } from 'redux';

import BreedSearchReducer from './BreedSearchReducer';
import TopBreedsReducer from './TopBreedsReducer';

export default combineReducers({
  BreedSearchReducer,
  TopBreedsReducer
});
