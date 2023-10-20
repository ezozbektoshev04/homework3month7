// import redux from "redux";

import { applyMiddleware, combineReducers, createStore } from "redux";
// import { connect } from 'react-redux'
import fetchReduser from "./students/fetchReduser";
import thunkMiddleware from "redux-thunk";

import thunk from "redux-thunk";
// import logger from "redux-logger";

// const combineReducer = combineReducers({
//   student: fetchReduser,
// });

const store = createStore(fetchReduser, applyMiddleware(thunkMiddleware));
export default store;
