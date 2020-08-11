import { createStore, combineReducers } from 'redux'
import gameReducer from './reducers/gameReducer';
import personReducer from './reducers/personReducer';
import userReducer from './reducers/userReducer';

const allReducers = combineReducers(
  {
    game: gameReducer,
    person: personReducer,
    users: userReducer
  })
const initialState = {
  game: {
    name: 'Football',
  },
  person: {
    name: 'Rahul'
  },
  users: []
}
const store = createStore(allReducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;