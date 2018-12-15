import actionTypes from '../constant/constant';
import {browserHistory} from 'react-router';
class LoadStoreState{
    static loadStoreState(obj){
        return{
            type: actionTypes.LOAD_STORE_STATE,
            obj
        }
    }
}

export default LoadStoreState;