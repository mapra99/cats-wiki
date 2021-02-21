import axios from 'axios';
import { FETCH_TOP_BREEDS, LOADING_TOP_BREEDS, ERROR_TOP_BREEDS, FEED_BREED_DATA } from '../types/BreedsTypes';
import { pluck, buildObjectFromArrays } from '../utils/arrayUtils';

const {API_URL} = process.env;
const TopBreedsActions = {
  fetchTopBreeds: (limit = 10) => (dispatch) => {
    dispatch({ type: LOADING_TOP_BREEDS })

    axios.get(`${API_URL}/breeds/top-searches?limit=${limit}`)
      .then(response => {
        const breed_ids = pluck(response.data, "id");

        dispatch({
          type: FEED_BREED_DATA,
          payload: buildObjectFromArrays(breed_ids, response.data)
        })

        dispatch({
          type: FETCH_TOP_BREEDS,
          payload: breed_ids
        })
      })
      .catch(error => {
        console.error(error);
        dispatch({ type: ERROR_TOP_BREEDS })
      });
  },
};

export default TopBreedsActions;
