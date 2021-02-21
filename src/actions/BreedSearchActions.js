import axios from 'axios';
import _ from 'underscore';
import {SEARCH_BREED, LOADING_BREED_SEARCH, ERROR_BREED_SEARCH, FEED_BREED_DATA, RESET_BREED_SEARCH} from '../types/BreedsTypes';

const {API_URL} = process.env;
const BreedSearchActions = {
  searchBreed: ({term, criteria = "breed_name", saveSearch = true, imagesLimit = 1}) => (dispatch) => {
    if (term.length <= 1) {
      return dispatch({
        type: SEARCH_BREED,
        payload: []
      })
    };

    dispatch({ type: LOADING_BREED_SEARCH })

    return axios.get(`${API_URL}/breeds/search?term=${term}&by=${criteria}&images_limit=${imagesLimit}`)
      .then(response => {
        const breed_ids = _.pluck(response.data, "id");

        dispatch({
          type: FEED_BREED_DATA,
          payload: _.object(breed_ids, response.data)
        })

        dispatch({
          type: SEARCH_BREED,
          payload: saveSearch ? breed_ids : []
        })
      })
      .catch(error => {
        console.error(error);
        dispatch({ type: ERROR_BREED_SEARCH })
      });
  },

  resetSearch: () => (dispatch) => {
    dispatch({ type: RESET_BREED_SEARCH });
  }
};

export default BreedSearchActions;
