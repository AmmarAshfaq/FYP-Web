import ActionTypes from '../constant/companyConstant'

const INITIAL_STATE = {
  fertilizerArray: [],
  machineryArray: [],
  pesticideArray: []
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
      var arrValue = state.fertilizerArray
      console.log(arrValue)
      var arrObj = action.payload
      arrValue.push(arrObj)
      console.log(arrValue)
      // console.log(arrValue)
      return {
        ...state,
        fertilizerArray: arrValue
      }
      break
    case ActionTypes.ADD_MACHINERY:
      var arrValue = state.machineryArray
      console.log(arrValue)
      var arrObj = action.payload
      arrValue.push(arrObj)

      return {
        ...state,
        machineryArray: arrValue
      }
      break
    case ActionTypes.ADD_PESTICIDE:
      var arrValue = state.pesticideArray
      console.log(arrValue)
      console.log(action.payload)
      var arrObj = action.payload
      arrValue.push(arrObj)

      return {
        ...state,
        pesticideArray: arrValue
      }
      break
    case ActionTypes.GET_FERTILIZER:
      return { ...state, fertilizerArray: action.payload }
      break
    case ActionTypes.GET_MACHINERY:
      return { ...state, machineryArray: action.payload }
      break
    case ActionTypes.GET_PESTICIDE:
      return { ...state, pesticideArray: action.payload }
      break
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
      break
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
      break
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
    default:
      return state
  }
}
