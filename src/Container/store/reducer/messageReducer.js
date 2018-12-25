import ActionTypes from '../constant/messageConstant'

const INITIAL_STATE = {
  allUserList: [],
  allMsgList: [],
  userSelect: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_MESSAGE:
      return { ...state, allUserList: action.payload }
      break
    case ActionTypes.GET_ALL_SPECIFIC:
      return { ...state, allMsgList: action.payload }
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

    default:
      return state
  }
}
