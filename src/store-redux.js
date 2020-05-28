import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { infoReducer } from "./lib/info";

const reducers = combineReducers({
  info: infoReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
