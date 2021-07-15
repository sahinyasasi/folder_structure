import { combineReducers } from "redux";
import postAd from "./postAdReducer";
import alert from "./alertReducer";
import currentUser from './currentUserReducer';
const rootReducer = combineReducers({ postAd, alert, currentUser });

export default rootReducer;
