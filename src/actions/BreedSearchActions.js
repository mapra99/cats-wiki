import axios from 'axios';
import _ from 'underscore';
import {SEARCH_BREED, LOADING_BREED_SEARCH, ERROR_BREED_SEARCH, FEED_BREED_DATA} from '../types/BreedsTypes';

const {API_URL} = process.env;
const BreedSearchActions = {
  searchBreed: (term) => (dispatch) => {
    if (term.length <= 1) {
      return dispatch({
        type: SEARCH_BREED,
        payload: []
      })
    };

    dispatch({ type: LOADING_BREED_SEARCH })

    axios.get(`${API_URL}/breeds/search?term=${term}`)
      .then(response => {
        const breed_ids = _.pluck(response.data, "id");

        dispatch({
          type: FEED_BREED_DATA,
          payload: _.object(breed_ids, response.data)
        })

        dispatch({
          type: SEARCH_BREED,
          payload: breed_ids
        })
      })
      .catch(error => {
        console.error(error);
        dispatch({ type: ERROR_BREED_SEARCH })
      });
  },
};

export default BreedSearchActions;
