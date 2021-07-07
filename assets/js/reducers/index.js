import { combineReducers } from "redux";
import postAd from "./postAdReducer";
import alert from "./alertReducer";
const rootReducer = combineReducers({ postAd, alert });

export default rootReducer;
