import ActionTypes from '../constant/farmerConstant'

const INITIAL_STATE = {
  cropArray: [],
  problemArray: [],
  notificationCrop: {},
  upload: false,
  error:{}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_CROP_SPECIFIC:
      // console.log(action.payload)
      return { ...state, cropArray: action.payload }
      break
    case ActionTypes.GET_PROBLEM_SPECIFIC:
      return { ...state, problemArray: action.payload }
      break
    case ActionTypes.ADD_CROP:
      var arrValue = state.cropArray
      // console.log(arrValue)
      var arrObj = action.payload
      arrValue.push(arrObj)
      // console.log(arrValue)
      return { ...state, cropArray: arrValue }
      break
    case ActionTypes.ADD_PROBLEM:
      var arrValue = state.problemArray
      // console.log(arrValue)
      var arrObj = action.payload
      arrValue.push(arrObj)
      // console.log(arrValue)
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
        notificationCrop: action.payload
      }
      break
    case ActionTypes.UPDATE_CROP:
      // console.log(action.payload)
      return {
        ...state,
        cropArray: state.cropArray.map((data, ind) => {
          if (data._id === action.payload.id) {
            return action.payload
          }
          return data
        })
      }
      break
    case ActionTypes.UPDATE_PROBLEM:
      console.log(action.payload)
      return {
        ...state,
        problemArray: state.problemArray.map((data, ind) => {
          if (data._id === action.payload._id) {
            return action.payload
          }
          return data
        })
      }
      break
    case ActionTypes.PROCESS_PROGRESS:
      return {
        ...state,
        upload: true
      }
      break
    case ActionTypes.PROCESS_DONE:
      return {
        ...state,
        upload: false
      }
      break
      case ActionTypes.ERROR_MESSAGE:
        return {
          ...state,
          error: action.payload
        }
        break
        case ActionTypes.ERROR_NULL:
          return {
            ...state,
            error: {}
          }
    default:
      return state
  }
}
