import { createStore, compose } from 'redux'
import { reducer } from './reducer'

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default createStore(reducer, composeEnhancers())
