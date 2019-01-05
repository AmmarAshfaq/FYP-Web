import ActionTypes from '../constant/constant'

const INITIAL_STATE = {
  authenticated: false,
  currentUserData: {},
  error:{},
  emailData:{}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_PROCESS:
      return { ...state, authenticated: true }
    case ActionTypes.AUTH_USER:
      return {
        ...state,
        authenticated: true,
        currentUserData: action.currentUser
      }

      break
      case ActionTypes.UN_AUTH_PROCESS:
      return {
        ...state,
        authenticated:false
      }
    case ActionTypes.UNAUTH_USER:
      return { ...state, authenticated: false }
      break
    case ActionTypes.AUTH_ERROR:
      return { ...state, error: action.payload }
      break
    case ActionTypes.EMAIL_SEND:
      return { ...state, emailData: action.payload }
      break;
      break
      case ActionTypes.EMAIL_EMPTY:
        return { ...state, emailData: {} }
        break;
   
    case 'SAVE_STORE_STATE':
  
    return {...state}
    default:
      return state
  }
}
