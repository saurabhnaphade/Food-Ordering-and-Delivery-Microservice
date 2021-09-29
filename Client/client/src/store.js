import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import Reducers from './Reducers'

const store = createStore(Reducers, composeWithDevTools(applyMiddleware()))
export default store
