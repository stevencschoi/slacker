import { combineReducers } from 'redux'
import countReducer from './count/countReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
  user: userReducer,
  count: countReducer,
})

export default rootReducer