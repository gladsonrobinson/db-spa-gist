import { combineReducers } from "redux";
import GistsReducers  from '../containers/Gists/reducers';

const AppReducer = combineReducers({
    gists:GistsReducers
});

export default AppReducer;