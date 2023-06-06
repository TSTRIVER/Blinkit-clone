import { combineReducers } from "redux";
import click_sliceReducer from "./click_slice";
import user_sliceReducer from "./user_slice";
import product_sliceReducer from "./product_slice";
import cart_sliceReducer from "./cart_slice";
import address_sliceReducer from "./address_slice";

const rootReducer = combineReducers({
  clicker: click_sliceReducer,
  user: user_sliceReducer,
  product: product_sliceReducer,
  cart: cart_sliceReducer,
  address: address_sliceReducer
});

export default rootReducer;
