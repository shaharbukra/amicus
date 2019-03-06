import { REQUEST_SW_PEOPLE } from "./types";
import axios from "../axios";


export const fetchPeople = postsData => {
  const people = [];
  for (let key in postsData.data.results) {
    people.push({
      ...postsData.data.results[key],
      id: key
    });
  }

  return {
    type: REQUEST_SW_PEOPLE,
    people
  };
};

export const requestAllPeople = () => {
  return dispatch => {
    return axios
      .get("people/?format=json")
      .then(response => {
        dispatch(fetchPeople(response));
      })
      .catch(error => {
        throw error;
      });
  };
};
