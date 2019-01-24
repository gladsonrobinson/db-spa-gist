import { SET_GIST_LIST } from "./constants";

let initialState = [];

const GistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GIST_LIST:
      return [...action.payload]
    default:
      return state;
  }
};

export default GistReducer;