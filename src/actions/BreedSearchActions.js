import axios from 'axios';
import {SEARCH_BREED, LOADING_BREED_SEARCH, ERROR_BREED_SEARCH} from '../types/BreedsTypes';

const BreedSearchActions = {
  searchBreed: (term) => (dispatch) => {
    if (term.length <= 1) {
      return dispatch({
        type: SEARCH_BREED,
        payload: []
      })
    };

    dispatch({ type: LOADING_BREED_SEARCH })

    axios.get(`${process.env.API_URL}/breeds/search?term=${term}`)
      .then(response => {
        dispatch({
          type: SEARCH_BREED,
          payload: response.data
        })
      })
      .catch(error => {
        console.error(error);
        dispatch({ type: ERROR_BREED_SEARCH })
      });
  },
};

export default BreedSearchActions;
