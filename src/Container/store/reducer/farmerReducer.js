import ActionTypes from '../constant/farmerConstant'
import ActionTypesCompany from '../constant/companyConstant'
const INITIAL_STATE = {
  cropArray: [],
  problemArray: [],
  // notificationCrop: {},
  // here cropGlobal is notification in buyer
  cropGlobal:[],
  upload: false,
  error: {},
  // here problemGlobal is notification in expert
  problemGlobal:[],

  farmerGlobalNoti:[]
  // notificationProblem:{}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_CROP_SPECIFIC:
      // console.log(action.payload)
      return { ...state, cropArray: action.payload }
    case ActionTypes.GET_PROBLEM_SPECIFIC:
      return { ...state, problemArray: action.payload }
    case ActionTypes.ADD_CROP:
      var arrCrop = state.cropArray
      // console.log(arrValue)
      var arrObjCrop = action.payload
      arrCrop.push(arrObjCrop)
      // console.log(arrValue)
      return { ...state, cropArray: arrCrop }
    case ActionTypes.ADD_PROBLEM:
      var arrValue = state.problemArray
      // console.log(arrValue)
      var arrObj = action.payload
      arrValue.push(arrObj)
      // console.log(arrValue)
      return { ...state, problemArray: arrValue }
    case ActionTypes.DELETE_CROP:
      return {
        ...state,
        cropArray: state.cropArray.filter(itemVal => {
          return itemVal._id !== action.payload._id
        })
      }
    case ActionTypes.DELETE_PROBLEM:
      return {
        ...state,
        problemArray: state.problemArray.filter(itemVal => {
          return itemVal._id !== action.payload._id
        })
      }
    // case ActionTypes.NOTIFICATION_CROP:
    //   return {
    //     ...state,
    //     notificationCrop: action.payload
    //   }
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
    case ActionTypes.PROCESS_PROGRESS:
      return {
        ...state,
        upload: true
      }
    case ActionTypes.PROCESS_DONE:
      return {
        ...state,
        upload: false
      }
    case ActionTypes.ERROR_MESSAGE:
      return {
        ...state,
        error: action.payload
      }
    case ActionTypes.ERROR_NULL:
      return {
        ...state,
        error: {}
      }
    // here we are
    case ActionTypes.NOTIFICATION_CROP:
      console.log(action.payload)
      var arrCropG = state.cropGlobal
      console.log(arrCropG)
      // console.log(arrValue)
      var arrObjCG= action.payload
      arrCropG.push(arrObjCG)
      return {
        ...state,
        cropGlobal: arrCropG
      }
      case ActionTypes.NOTIFICATION_PROBLEM:
      console.log(action.payload)
      var arrProblemG = state.problemGlobal
      console.log(arrProblemG)
      // console.log(arrValue)
      var arrObjPG= action.payload
      arrProblemG.push(arrObjPG)
      return {
        ...state,
        problemGlobal: arrProblemG
      }




      case ActionTypesCompany.NOTIFICATION_FERTILIZER:
      console.log(action.payload)
      var arrCropG1 = state.cropGlobal
      var arrProblemG1 = state.problemGlobal
      var arrFarmerNoti = state.farmerGlobalNoti
      console.log(arrCropG1)
      // console.log(arrValue)
      var arrObjCG1= action.payload
      arrCropG1.unshift(arrObjCG1)
      var arrObjPG1= action.payload
      arrProblemG1.unshift(arrObjPG1)
      var arrObjFG1 = action.payload
      arrFarmerNoti.unshift(arrObjFG1)
      return {
        ...state,
        cropGlobal: arrCropG1,
        problemGlobal:arrProblemG1,
        farmerGlobalNoti:arrFarmerNoti
      }
      case ActionTypesCompany.NOTIFICATION_MACHINERY:
      console.log(action.payload)
      var arrFarmerNoti2 = state.farmerGlobalNoti
      var arrCropG2 = state.cropGlobal
      var arrProblemG2 = state.problemGlobal
      console.log(arrCropG2)
      // console.log(arrValue)
      var arrObjCG2= action.payload
      arrCropG2.unshift(arrObjCG2)
      var arrObjPG2= action.payload
      arrProblemG2.unshift(arrObjPG2)
      var arrObjFG1 = action.payload
      arrFarmerNoti2.unshift(arrObjFG1)
      return {
        ...state,
        cropGlobal: arrCropG2,
        problemGlobal:arrProblemG2,
        farmerGlobalNoti:arrFarmerNoti2

      }
      case ActionTypesCompany.NOTIFICATION_PESTICIDE:
      console.log(action.payload)
      var arrCropG3 = state.cropGlobal
      var arrProblemG3 = state.problemGlobal
      var arrFarmerNoti3 = state.farmerGlobalNoti
      console.log(arrCropG3)
      // console.log(arrValue)
      var arrObjCG3= action.payload
      arrCropG3.unshift(arrObjCG3)
      var arrObjPG3= action.payload
      arrProblemG3.unshift(arrObjPG3)
      var arrObjFG2 = action.payload
      arrFarmerNoti3.unshift(arrObjFG2)
      return {
        ...state,
        cropGlobal: arrCropG3,
        problemGlobal: arrProblemG3,
        farmerGlobalNoti:arrFarmerNoti3

      }
     
    default:
      return state
  }
}
