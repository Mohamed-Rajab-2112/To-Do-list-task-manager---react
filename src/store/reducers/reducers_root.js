import sharedReducer from "./shared_reducer";
import {combineReducers} from "redux";
import authReducer from "./auth-reducer";

const rootReducer = combineReducers({
  sharedReducer,
  authReducer
});

export default rootReducer;
