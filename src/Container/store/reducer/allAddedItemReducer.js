import ActionTypes from '../constant/allCropConstant'
import ActionComment from '../constant/commentConstant'
const INITIAL_STATE = {
  cropData: [],
  specificCrop: {},
  commentID: undefined
  // comments:[]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_CROP:
      return { ...state, cropData: action.payload }
      break
    case ActionTypes.SPECIFIC_CROP:
      return { ...state, specificCrop: action.payload }
      break
    case ActionComment.ADD_COMMENT:
      //  var commentsReplace = state.specificCrop.cropDetail.comments;
      //  comm

      return {
        ...state,
        specificCrop: {
          ...state.specificCrop,
          comments: action.payload
        }
      }
      break
    case ActionComment.SELECT_ID:
      //  var commentsReplace = state.specificCrop.cropDetail.comments;
      //  comm

      return {
        ...state,
        commentID: action.payload
      }
      break
      case ActionComment.UPDATE_COMMENT:
        //  var commentsReplace = state.specificCrop.cropDetail.comments;
        //  comm
  
        return {
          ...state,
          specificCrop: {
            ...state.specificCrop,
            comments: action.payload
          }
        }
    default:
      return state
  }
}
