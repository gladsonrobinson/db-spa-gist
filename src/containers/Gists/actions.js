import { SET_GIST_LIST, UPDATE_FORK_DETAILS } from "./constants";
import axios from "axios";

export const getGistFromUserName = username => {
  return dispatch => {
    return axios.get(`https://api.github.com/users/${username}/gists`).then(({data}) => {
      dispatch(setGistList(data));
    })
  }
}

export const getLastThreeForkFromGistId = (gistId, index) => {
  return dispatch => {
    return axios.get(`https://api.github.com/gists/${gistId}/forks`).then(({data}) => {
      dispatch(updateForkDetails(data, index))
    })
  }
}



const updateForkDetails = (data, index) => {
  return {
    type: UPDATE_FORK_DETAILS,
    payload: {
      data,
      index
    }
  };
}

function setGistList(data) {
  return {
    type: SET_GIST_LIST,
    payload: data
  };
}
