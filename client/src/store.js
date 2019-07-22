
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}

// use thunk middleware
const middleware = [thunk]
// from redux
const store = createStore(
  rootReducer,
  initialState,
  // use devtools extension to apply middleware
  composeWithDevTools(
    applyMiddleware(...middleware)
  ))

export default store
