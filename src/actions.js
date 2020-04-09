import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILURE,
} from "./constant";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payLoad: text,
});

export const requestRobots = () => (dispatch) => {
  dispatch({
    type: REQUEST_ROBOTS_PENDING
  })
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => dispatch({
      type:REQUEST_ROBOTS_SUCCESS,
      payLoad: data
    }))
    .catch(err => dispatch({
      type: REQUEST_ROBOTS_FAILURE,
      payLoad: err
    }))
}