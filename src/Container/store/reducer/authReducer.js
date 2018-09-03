import ActionTypes from '../constant/constant'

const INITIAL_STATE = {
  authenticated:false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { ...state, authenticated: true }

      break
    case ActionTypes.UNAUTH_USER:
      return { ...state, authenticated: false }
      break
    // case ActionTypes.AUTH_ERROR:
    //   return { ...state, error: action.payload }
    //   break;
      case ActionTypes.FETCH_MESSAGE:
      return { ...state, message: action.payload }
    default:
      return state
  }
}
