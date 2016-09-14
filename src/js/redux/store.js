import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk, { default } from 'redux-thunk'
import reducers from './reducers'

const store = createStore(reducers, compose(
  applyMiddleware(thunk, logger()),
  window.devToolsExtension ? window.devToolsExtension() : f => f))

export default store
