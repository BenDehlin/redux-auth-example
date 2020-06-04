import { createStore, applyMiddleware, combineReducers } from "redux"
import authReducer from "./authReducer"
import movieReducer from "./movieReducer"
import promiseMiddleware from "redux-promise-middleware"

const rootReducer = combineReducers({ authReducer, movieReducer })

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))
