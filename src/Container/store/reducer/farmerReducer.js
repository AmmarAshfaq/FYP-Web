import ActionTypes from '../constant/farmerConstant'

const INITIAL_STATE = {
  cropArray: [],
  problemArray: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_CROP_SPECIFIC:
      console.log(action.payload)
      return { ...state, cropArray: action.payload }
      break
    case ActionTypes.GET_PROBLEM_SPECIFIC:
      return { ...state, problemArray: action.payload }

    default:
      return state
  }
}
