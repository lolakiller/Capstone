import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  snake: require('./snake').default,
})

export default rootReducer
