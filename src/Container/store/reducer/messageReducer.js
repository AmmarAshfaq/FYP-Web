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
    case ActionTypes.GET_ALL_SPECIFIC:
      return {
        ...state,
        allMsgList: action.payload,
        selectUserFromList: action.userSelectForMsg
      }
      
    case ActionTypes.LISTEN_MESSAGE:
      var arrVal = state.allMsgList
      var arrObj = action.payload
      console.log(action.payload)
      arrVal.push(arrObj)

      return { ...state, allMsgList: arrVal }
    case ActionTypes.START_MESSAGE:
      return { ...state, userSelect: action.payload }
    case ActionTypes.LOAD_PROCESS:
      return { ...state, loader: true }
    case ActionTypes.LOAD_DONE:
      return { ...state, loader: false }
      case ActionTypes.START_MESSAGE_NULL:
        return { ...state, userSelect: {} }
    default:
      return state
  }
}
