import ActionTypes from '../constant/constant'

const ROOT_URL = 'http://localhost:8080'
export function weatherData () {
const getToken = localStorage.getItem('token')
// console.log(getToken)
  
  return async dispatch => {
    
    const result = await fetch(`${ROOT_URL}/getweather`, {
      headers: {
        authorization: getToken
      }
    })

    const getData = await result.json()
    // console.log(getData)
    if (getData.message) {
      alert('Check Your Internet')
    } else {
      dispatch({
        type: ActionTypes.WEATHER_GET,
        payload: getData
      })
    }
  }
}
