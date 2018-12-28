import ActionTypes from '../constant/farmerConstant'

const INITIAL_STATE = {
  cropArray: [],
  problemArray: [],
  notificationCrop:{}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_CROP_SPECIFIC:
      console.log(action.payload)
      return { ...state, cropArray: action.payload }
      break
    case ActionTypes.GET_PROBLEM_SPECIFIC:
      return { ...state, problemArray: action.payload }
      break
    case ActionTypes.ADD_CROP:
      var arrValue = state.cropArray
      console.log(arrValue)
      var arrObj = action.payload
      arrValue.push(arrObj)
      console.log(arrValue)
      return { ...state, cropArray: arrValue }
      break
    case ActionTypes.ADD_PROBLEM:
      var arrValue = state.problemArray
      console.log(arrValue)
      var arrObj = action.payload
      arrValue.push(arrObj)
      console.log(arrValue)
      return { ...state, problemArray: arrValue }
      break
    case ActionTypes.DELETE_CROP:
      return {
        ...state,
        cropArray: state.cropArray.filter(itemVal => {
          return itemVal._id !== action.payload._id
        })
      }
      break
      case ActionTypes.DELETE_PROBLEM:
        return {
          ...state,
          problemArray: state.problemArray.filter(itemVal => {
            return itemVal._id !== action.payload._id
          })
        }
        break
        case ActionTypes.NOTIFICATION_CROP:
          return {
            ...state,
            notificationCrop:action.payload
          }
    default:
      return state
  }
}
