import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  snakes: require('./snakes').default,
  users: require('./int').default
})

export default rootReducer
