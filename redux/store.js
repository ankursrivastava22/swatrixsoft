import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// import ProductsReducer from "./reducer/ProductsReducer";
import { CartReducer } from "./reducer/CartReducer";
const root = combineReducers({
  //   ProductsReducer,
  CartReducer,
});

const middleware = [thunk];

const Store = createStore(
  root,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default Store;
