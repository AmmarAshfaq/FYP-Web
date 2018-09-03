import reducer from './reducer'
import authReducer from './authReducer'

import { combineReducers } from 'redux'

export default combineReducers({
  reducer,
  authReducer
})
