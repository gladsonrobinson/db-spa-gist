import { SET_GIST_LIST, UPDATE_FORK_DETAILS } from "./constants";

let initialState = [];

const GistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GIST_LIST:
      return [...action.payload];
    case UPDATE_FORK_DETAILS:
      if(action.payload.data) {
        state[action.payload.index]['fork_details'] = (action.payload.data.slice(0, 3));
        return [...state];
      }
      break;
    default:
      return state;
  }
};

export default GistReducer;