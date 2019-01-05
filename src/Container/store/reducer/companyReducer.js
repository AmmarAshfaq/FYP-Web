import ActionTypes from '../constant/companyConstant'

const INITIAL_STATE = {
  fertilizerArray: [],
  machineryArray: [],
  pesticideArray: [],
  allFertilizerData: [],
  allPesticideData: [],
  allMachineryData: [],
  fertilizerProduct: {},
  connectMsg:{},
  upload: false,
  error:{}


  // machineryProduct: {},
  // pesticideProduct: {}
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FERTILIZER:
      // console.log(action.payload)
      // const arr = [];
      // arr.push(action.payload)
      // console.log(arr)
      // state.fertilizerArray.push(action.payload)
      // console.log(state.fertilizerArray)
      var arrFer = state.fertilizerArray
      console.log(arrFer)
      var arrObjFer = action.payload
      arrFer.push(arrObjFer)
      console.log(arrFer)
      // console.log(arrValue)
      return {
        ...state,
        fertilizerArray: arrFer
      }
    case ActionTypes.ADD_MACHINERY:
      var arrMach = state.machineryArray
      console.log(arrMach)
      var arrObjMac = action.payload
      arrMach.push(arrObjMac)

      return {
        ...state,
        machineryArray: arrMach
      }
    case ActionTypes.ADD_PESTICIDE:
      var arrPes = state.pesticideArray
      console.log(arrPes)
      console.log(action.payload)
      var arrObjPes = action.payload
      arrPes.push(arrObjPes)

      return {
        ...state,
        pesticideArray: arrPes
      }
    case ActionTypes.GET_FERTILIZER:
      return { ...state, fertilizerArray: action.payload }
    case ActionTypes.GET_MACHINERY:
      return { ...state, machineryArray: action.payload }
    case ActionTypes.GET_PESTICIDE:
      return { ...state, pesticideArray: action.payload }
    case ActionTypes.UPDATE_FERTILIZER:
      // console.log(action.payload)
      // var arr = state.fertilizerArray.map((data,ind)=>{
      //   if(data._id === action.payload._id){
      //     // console.log(action.payload)
      //     return action.payload

      //   }
      //   return data

      // })

      // console.log(arr)
      return {
        ...state,
        fertilizerArray: state.fertilizerArray.map((data, ind) => {
          if (data._id === action.payload._id) {
            // console.log(action.payload)
            return action.payload
          }
          return data
        })
      }
    case ActionTypes.UPDATE_MACHINERY:
      return {
        ...state,
        machineryArray: state.machineryArray.map((data, ind) => {
          if (data._id === action.payload._id) {
            return action.payload
          }
          return data
        })
      }
    case ActionTypes.UPDATE_PESTICIDE:
      return {
        ...state,
        pesticideArray: state.pesticideArray.map((data, ind) => {
          if (data._id === action.payload._id) {
            return action.payload
          }
          return data
        })
      }
    case ActionTypes.GET_ALL_FERTILIZER:
      return {
        ...state,
        allFertilizerData: action.payload
      }
    case ActionTypes.GET_ALL_MACHINERY:
      return {
        ...state,
        allMachineryData: action.payload
      }
    case ActionTypes.GET_ALL_PESTICIDE:
      return {
        ...state,
        allPesticideData: action.payload
      }
    case ActionTypes.GET_SPECIFIC_FERTILIZER:
      return {
        ...state,
        fertilizerProduct: action.payload
      }
    case ActionTypes.GET_SPECIFIC_FERTILIZER:
      return {
        ...state,
        fertilizerProduct: action.payload
      }
    case ActionTypes.GET_SPECIFIC_FERTILIZER:
      return {
        ...state,
        fertilizerProduct: action.payload
      }
      case ActionTypes.STORE_FOR_MSG:
        return {
          ...state,
          connectMsg: action.payload
        }
        case ActionTypes.PROCESS_PROGRESS:
        return {
          ...state,
          upload: true
        }
        case ActionTypes.PROCESS_DONE:
        return{
          ...state,
          upload:false
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
            case ActionTypes.DELETE_FERTILIZER:
              return {
                ...state,
                fertilizerArray: state.fertilizerArray.filter(itemVal => {
                  return itemVal._id !== action.payload._id
                })
              }
              case ActionTypes.DELETE_MACHINERY:
                return {
                  ...state,
                  machineryArray: state.machineryArray.filter(itemVal => {
                    return itemVal._id !== action.payload._id
                  })
                }
                case ActionTypes.DELETE_PESTICIDE:
                  return {
                    ...state,
                    pesticideArray: state.pesticideArray.filter(itemVal => {
                      return itemVal._id !== action.payload._id
                    })
                  }
    default:
      return state
  }
}
