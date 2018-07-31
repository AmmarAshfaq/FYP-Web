import ActionTypes from '../constant/constant'

const INITIAL_STATE = {
  item: '',
  componentUpdate: 'Main'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.MENU:
      // console.log(action.itemSelect)
      return { ...state, item: action.itemSelect }

      break;
    case ActionTypes.CHANGE:
      // console.log(action)
      return { ...state, componentUpdate: action.componentList }

      break;
    default:
      return state
  }
}
