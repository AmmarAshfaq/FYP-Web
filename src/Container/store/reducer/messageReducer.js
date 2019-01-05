import ActionTypes from '../constant/messageConstant'

const INITIAL_STATE = {
  allUserList: [],
  allMsgList: [],
  userSelect: {},
  loader: false,
  selectUserFromList: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_MESSAGE:
      return { ...state, allUserList: action.payload }
      break
    case ActionTypes.GET_ALL_SPECIFIC:
      return {
        ...state,
        allMsgList: action.payload,
        selectUserFromList: action.userSelectForMsg
      }
      break
    case ActionTypes.LISTEN_MESSAGE:
      var arrVal = state.allMsgList
      var arrObj = action.payload
      arrVal.push(arrObj)

      return { ...state, allMsgList: arrVal }
      break
    case ActionTypes.START_MESSAGE:
      return { ...state, userSelect: action.payload }
      break
    case ActionTypes.LOAD_PROCESS:
      return { ...state, loader: true }
      break
    case ActionTypes.LOAD_DONE:
      return { ...state, loader: false }
      break
      case ActionTypes.START_MESSAGE_NULL:
        return { ...state, userSelect: {} }
    default:
      return state
  }
}
