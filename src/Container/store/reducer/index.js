import reducer from './reducer'
import authReducer from './authReducer'
import adminReducer from './adminReducer'
import farmerReducer from './farmerReducer'

import { combineReducers } from 'redux'

export default combineReducers({
  reducer,
  authReducer,
  adminReducer,
  farmerReducer
})
