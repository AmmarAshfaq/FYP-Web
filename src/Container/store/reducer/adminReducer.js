import ActionTypes from '../constant/adminConstant'



const INITIAL_STATE = {
   selectPanel:undefined
  }
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ActionTypes.SELECT_PANEL:
        return { ...state, selectPanel:action.itemSelect }
     
      default:
        return state
    }
  }