import logger from "redux-logger"
import { combineReducers, createStore, applyMiddleware } from "redux"
import ReduxThunk from 'redux-thunk'

import usersReducer from "./users/users.reducer"
import cakeReducer from "./cake/cake.reducer"
import icecreamReducer from "./icecream/icecream.reducer"

const rootReducer = combineReducers(
  {
    cake: cakeReducer,
    icecream: icecreamReducer,
    users: usersReducer
  }
)
const middlewares = applyMiddleware(logger, ReduxThunk)
const store = createStore(rootReducer, middlewares)
export default store;