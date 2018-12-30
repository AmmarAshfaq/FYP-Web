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
        // dispatch(authError('Please Select Service'))
        browserHistory.push('/login')
      }
      // if (obj.authenticate === undefined) {
      //   dispatch(authError('Please Select Service'))
      //   browserHistory.push('/login')
      // } else {
      //   console.log(getData)
      //   dispatch(signupSucced(getData))

      //   localStorage.setItem('token', getData.token)
      //   browserHistory.push(`/${obj.authenticate}`)
      //   dispatch(changeNavbar(`${getData.user.userType}Home`))
      // }
      // dispatch(signupUnAuthRequest())
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
// here we change when logout
export function signoutUser (data) {
  console.log(data)
  return dispatch => {
    localStorage.removeItem('token')
    browserHistory.push('/login')
    localStorage.removeItem('state')
    dispatch(signOut())
    dispatch(changeNavbar(data))
  }
}
export function signupUser (obj) {
  // console.log(obj)
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
          // 'Content-Type':'multipart/form-data'
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
          // dispatch(authError('Please Select Service'))
          browserHistory.push('/login')
        }
        // if (obj.authenticate === undefined) {
        //   dispatch(authError('Please Select Service'))
        //   browserHistory.push('/login')
        // } else {
        //   console.log(getData)
        //   dispatch(signupSucced(getData))
  
        //   localStorage.setItem('token', getData.token)
        //   browserHistory.push(`/${obj.authenticate}`)
        //   dispatch(changeNavbar(`${getData.user.userType}Home`))
        // }
      } else if (getData.error) {
        browserHistory.push('/login')
        dispatch(authError(getData))
      }
      // localStorage.setItem('token', getData.token)
      // if (getData.user) {
      //   browserHistory.push('/login')
      //   dispatch(signupSucced(getData))
      // } else if (getData.error) {
      //   browserHistory.push('/signup')
      //   dispatch(authError(getData))
      // }
   
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
  // console.log(componentChange + 'jasjkajkajdskjakdjakdkjdkajkdja')
  return {
    type: ActionTypes.CHANGE,
    componentList: componentChange
  }
}
