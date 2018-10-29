import ActionTypes from '../constant/constant'
import { browserHistory } from 'react-router'
import axios from 'axios'
const ROOT_URL = 'http://localhost:3090'

export function signinUser (obj) {
  console.log(obj)
  return dispatch => {
    // console.log(obj)
    axios
      .post(`${ROOT_URL}/signin`, {
        email: obj.email,
        password: obj.password
      })
      .then(res => {
        dispatch({ type: ActionTypes.AUTH_USER })

        localStorage.setItem('token', res.data.token)

        browserHistory.push(`/${obj.authenticate}`)
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'))
      })
  }
}
// here we change when logout
export function signoutUser () {
  localStorage.removeItem('token')
  browserHistory.push('/login')
  return { type: ActionTypes.UNAUTH_USER }
}
export function signupUser (obj) {
  console.log(obj)
  const {email,password,imagePath,name} = obj
  return function (dispatch) {
    axios
      .post(`${ROOT_URL}/signup`, { email, password,imagePath,name })
      .then(res => {
        dispatch({ type: ActionTypes.AUTH_USER })

        localStorage.setItem('token', res.data.token)

        browserHistory.push(`/login`)
      })
      .catch(res => {
        dispatch(authError(res.data.error))
      })
  }
}

export function authError (error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    payload: error
  }
}
// here we will change the routes dinamically but still we use perminant routes
export function fecthMessage () {
  return function (dispatch) {
    axios
      .get(`${ROOT_URL}/farmermain`, {
        headers: { authorization: localStorage.getItem('token') }
      })
      .then(res => {
        console.log(res)
        dispatch({
          type: ActionTypes.FETCH_MESSAGE,
          payload: res.data.message
        })
      })
  }
}
