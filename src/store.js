import {createStore, combineReducers, compose, applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import Cookie from "js-cookie";
import { userReducer } from "./Reducer/userReducer";
import { postReducer } from "./Reducer/postReducer";
const userInfo = Cookie.getJSON("userInfo") || null;
const initialState = {signin : {userInfo},posts:[]};

const reducer = combineReducers({
    signin:userReducer,
    posts:postReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))
export default store;