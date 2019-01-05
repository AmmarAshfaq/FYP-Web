import ActionTypes from '../constant/constant'
import { browserHistory } from 'react-router'
const ROOT_URL = 'http://localhost:8080'

export function signinUser (obj) {
  console.log(obj)
  const data = {
    email: obj.email,
    password: obj.password
  }

  return async dispatch => {
    dispatch(signupRequest())

    const result = await fetch(`${ROOT_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(data)
    })
    const getData = await result.json()
console.log(getData)
    if (getData.user) {
      if (getData.user.userType === 'Company') {
        localStorage.setItem('token', getData.token)
        dispatch(signupSucced(getData))

        browserHistory.push('/companymain')

        dispatch(changeNavbar(`${getData.user.userType}Home`))
        // dispatch(signupSucced(getData))
      } else if (getData.user.userType === 'Farmer') {
        localStorage.setItem('token', getData.token)
        dispatch(signupSucced(getData))

        browserHistory.push('/farmermain')
        dispatch(changeNavbar(`${getData.user.userType}Home`))
      } else if (getData.user.userType === 'Expert') {
        localStorage.setItem('token', getData.token)
        dispatch(signupSucced(getData))

        browserHistory.push('/expertmain')
        dispatch(changeNavbar(`${getData.user.userType}Home`))
      } else if (getData.user.userType === 'Buyer') {
        localStorage.setItem('token', getData.token)
        dispatch(signupSucced(getData))
        browserHistory.push('/buyermain')
        dispatch(changeNavbar(`${getData.user.userType}Home`))
      }
      else if(getData.user.userType === 'Admin'){
        /* Admin Login */
        localStorage.setItem('token', getData.token)
        dispatch(signupSucced(getData))

        browserHistory.push('/adminmain')
        dispatch(changeNavbar(`${getData.user.userType}Home`))
      } 
      else {
        browserHistory.push('/login')
      }
    } else if (getData.error) {
      browserHistory.push('/login')
      dispatch(authError(getData))
      dispatch(signupUnAuthRequest()) // if use doesnot give correct email then they should not be signin
    }
  }
}
export function loaderOffProcess () {
  return dispatch => {
    dispatch({
      type: ActionTypes.UN_AUTH_PROCESS
    })
  }
}

export function emailSendAction (obj) {
  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/contactForm`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(obj)
    })

    const getData = await result.json();
    if (getData.success === 'true') {
      dispatch(sendSuccess(getData))
    } else {
      dispatch(sendSuccess(getData))
    }
  }
}
function sendSuccess (obj) {
  return {
    type: ActionTypes.EMAIL_SEND,
    payload: obj
  }
}

export function emailSuccessEmpty(){
  return{
    type:ActionTypes.EMAIL_EMPTY,

  }
}
export function signoutUser (data) {
  return dispatch => {
    localStorage.removeItem('token')
    browserHistory.push('/login')
    localStorage.removeItem('state')
    dispatch(signOut())
    dispatch(changeNavbar(data))
  }
}
export function signupUser (obj) {
  let data = new FormData()
  data.append('image_url', obj.image_url)
  data.append('name', obj.name)
  data.append('email', obj.email)
  data.append('password', obj.password)
  data.append('userType', obj.userType)

  return async dispatch => {
    dispatch(signupRequest())

    const result = await fetch(`${ROOT_URL}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: data
    })
    const getData = await result.json()
    console.log(getData)

    if (getData.user) {
      if (getData.user.userType === 'Company') {
        localStorage.setItem('token', getData.token)
        dispatch(signupSucced(getData))

        browserHistory.push('/companymain')

        dispatch(changeNavbar(`${getData.user.userType}Home`))
      } else if (getData.user.userType === 'Farmer') {
        localStorage.setItem('token', getData.token)
        dispatch(signupSucced(getData))

        browserHistory.push('/farmermain')
        dispatch(changeNavbar(`${getData.user.userType}Home`))
      } else if (getData.user.userType === 'Expert') {
        localStorage.setItem('token', getData.token)
        dispatch(signupSucced(getData))

        browserHistory.push('/expertmain')
        dispatch(changeNavbar(`${getData.user.userType}Home`))
      } else if (getData.user.userType === 'Buyer') {
        localStorage.setItem('token', getData.token)
        dispatch(signupSucced(getData))
        browserHistory.push('/buyermain')
        dispatch(changeNavbar(`${getData.user.userType}Home`))
      } else {
        browserHistory.push('/login')
      }
    } else if (getData.error) {
      browserHistory.push('/login')
      dispatch(authError(getData))
    }
  }
}

export function forgetPassword (obj) {
  return async dispatch => {
    dispatch(signupRequest())

    const result = await fetch(`${ROOT_URL}/passwordReset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(obj)
    })
    const getData = await result.json()

    if (getData.user) {
      if (getData.user.userType === 'Company') {
        localStorage.setItem('token', getData.token)
        dispatch(signupSucced(getData))

        browserHistory.push('/companymain')

        dispatch(changeNavbar(`${getData.user.userType}Home`))
        // dispatch(signupSucced(getData))
      } else if (getData.user.userType === 'Farmer') {
        localStorage.setItem('token', getData.token)
        dispatch(signupSucced(getData))

        browserHistory.push('/farmermain')
        dispatch(changeNavbar(`${getData.user.userType}Home`))
      } else if (getData.user.userType === 'Expert') {
        localStorage.setItem('token', getData.token)
        dispatch(signupSucced(getData))

        browserHistory.push('/expertmain')
        dispatch(changeNavbar(`${getData.user.userType}Home`))
      } else if (getData.user.userType === 'Buyer') {
        localStorage.setItem('token', getData.token)
        dispatch(signupSucced(getData))
        browserHistory.push('/buyermain')
        dispatch(changeNavbar(`${getData.user.userType}Home`))
      } else {
        browserHistory.push('/changePassword')
      }
    } else if (getData.error) {
      browserHistory.push('/changePassword')
      dispatch(authError(getData))
      dispatch(signupUnAuthRequest()) // if use doesnot give correct email then they should not be signin
    }
  }
}
function signupRequest () {
  return {
    type: ActionTypes.AUTH_PROCESS
  }
}
function signupSucced (obj) {
  return {
    type: ActionTypes.AUTH_USER,
    currentUser: obj
  }
}
export function authError (error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    payload: error
  }
}
function signOut () {
  return { type: ActionTypes.UNAUTH_USER }
}
function signupUnAuthRequest () {
  return { type: ActionTypes.UNAUTH_USER }
}
export function changeNavbar (componentChange) {
  return {
    type: ActionTypes.CHANGE,
    componentList: componentChange
  }
}
