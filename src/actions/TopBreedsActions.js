import axios from 'axios';
import { FETCH_TOP_BREEDS, LOADING_TOP_BREEDS, ERROR_TOP_BREEDS } from '../types/BreedsTypes';

const {API_URL} = process.env;
const TopBreedsActions = {
  fetchTopBreeds: (limit = 10) => (dispatch) => {
    dispatch({ type: LOADING_TOP_BREEDS })

    axios.get(`${API_URL}/breeds/top-searches?limit=${limit}`)
      .then(response => {
        console.log(response.data);
        dispatch({
          type: FETCH_TOP_BREEDS,
          payload: response.data
        })
      })
      .catch(error => {
        console.error(error);
        dispatch({ type: ERROR_TOP_BREEDS })
      });
  },
};

export default TopBreedsActions;
