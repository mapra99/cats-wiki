import axios from 'axios';
import {SEARCH_BREED, FETCH_BREEDS} from '../types/BreedsTypes';

const {API_URL} = process.env;
const BreedActions = {
  searchBreed: (term) => (dispatch) => {
    if(term.length <= 1) return;

    axios.get(`${API_URL}/breeds/search?term=${term}`)
      .then(response => {
        dispatch({
          type: SEARCH_BREED,
          payload: response.data
        })
      })
      .catch(error => console.error(error));
  },
};

export default BreedActions;
