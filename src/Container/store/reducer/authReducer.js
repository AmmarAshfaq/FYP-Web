import ActionTypes from '../constant/constant'

const INITIAL_STATE = {
  authenticated: false,
  currentUserData: {},
  error:{}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_PROCESS:
      return { ...state, authenticated: true }
    case ActionTypes.AUTH_USER:
      return {
        ...state,
        authenticated: false,
        currentUserData: action.currentUser
      }

      break
    case ActionTypes.UNAUTH_USER:
      return { ...state, authenticated: false }
      break
    case ActionTypes.AUTH_ERROR:
      return { ...state, error: action.payload }
      break;
    // case ActionTypes.FETCH_MESSAGE:
    //   return { ...state, message: action.payload }
    case 'SAVE_STORE_STATE':
    // return Object.assign({}, action.state);
    return {...state}
    default:
      return state
  }
}
