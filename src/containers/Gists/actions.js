import { SET_GIST_LIST } from "./constants";
import axios from "axios";

export const getGistFromUserName = (username) => {{
  return dispatch => {
    return axios.get(`https://api.github.com/users/${username}/gists`).then(({data}) => {
      dispatch(setGistList(data));
    })
  }
}}

function setGistList(data) {
  return {
    type: SET_GIST_LIST,
    payload: data
  };
}
