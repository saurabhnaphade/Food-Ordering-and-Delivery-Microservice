import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import counterReducer from './counterReducer'

const reducers = combineReducers({
  cartItems: cartReducer,
  counter : counterReducer,
})

export default reducers
