import sharedReducer from "./shared_reducer";
import {combineReducers} from 'redux'
import logInReducer from "./log-in-reducer";

const rootReducer = combineReducers({
  sharedReducer,
  logInReducer
});

export default rootReducer;