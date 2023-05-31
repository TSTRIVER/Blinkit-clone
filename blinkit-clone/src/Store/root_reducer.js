import { combineReducers } from "redux";
import click_sliceReducer from "./click_slice";
import user_sliceReducer from "./user_slice";

const rootReducer = combineReducers({
  clicker: click_sliceReducer,
  user: user_sliceReducer,
});

export default rootReducer;
