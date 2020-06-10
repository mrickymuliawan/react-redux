import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import walletReducer from './walletReducer'

// root redux 
// state
// todo = []


export default combineReducers({
  todos: todoReducer,
  wallet: walletReducer
  // wallet: walletReducer,
})
