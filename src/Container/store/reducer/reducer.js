import ActionTypes from '../constant/constant'

const INITIAL_STATE = {
  item: '',
  componentUpdate: 'Main',
  modelOpen: false

}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.MENU:
      return { ...state, item: action.itemSelect }

      break;
    case ActionTypes.CHANGE:
      return { ...state, componentUpdate: action.componentList }

      break;
      case ActionTypes.OPEN:
      return { ...state, modelOpen: action.itemSelect }

      break;
    default:
      return state
  }
}
