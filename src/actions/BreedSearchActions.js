import {SEARCH_BREED, LOADING_BREED_SEARCH, ERROR_BREED_SEARCH, FEED_BREED_DATA, RESET_BREED_SEARCH} from '../types/BreedsTypes';
import { pluck, buildObjectFromArrays } from '../utils/arrayUtils';

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

    return fetch(`${API_URL}/breeds/search?term=${term}&by=${criteria}&images_limit=${imagesLimit}`)
      .then(response => {
        if (!response.ok) throw Error(response.statusText);

        return response.json();
      })
      .then(data => {
        const breed_ids = pluck(data, "id");

        dispatch({
          type: FEED_BREED_DATA,
          payload: buildObjectFromArrays(breed_ids, data)
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
