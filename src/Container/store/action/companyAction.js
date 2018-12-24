import ActionTypes from '../constant/companyConstant'
const ROOT_URL = 'http://localhost:8080'
let getToken
export function getFertilizerAction (obj) {
  getToken = localStorage.getItem('token')

  // console.log(obj)
  const objData = {
    companyId: obj
  }
  // console.log(objData)
  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/fertilizer/company`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        authorization: getToken
      },
      body: JSON.stringify(objData)
    })

    const getData = await result.json()
    // console.log(getData)
    dispatch(getFertilizer(getData.fertilizerData))
  }
}
export function getPesticideAction (obj) {
  getToken = localStorage.getItem('token')

  // console.log(obj)
  const objData = {
    companyId: obj
  }
  // console.log(objData)
  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/pesticide/company`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        authorization: getToken
      },
      body: JSON.stringify(objData)
    })

    const getData = await result.json()
    // console.log(getData)
    dispatch(getPesticide(getData.pesticideData))
  }
}
export function getMachineryAction (obj) {
  getToken = localStorage.getItem('token')

  // console.log(obj)
  const objData = {
    companyId: obj
  }
  // console.log(objData)
  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/machinery/company`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        authorization: getToken
      },
      body: JSON.stringify(objData)
    })

    const getData = await result.json()
    // console.log(getData)
    dispatch(getMachinery(getData.machineryData))
  }
}
export function addFertilizerAction (obj) {
  getToken = localStorage.getItem('token')
  // console.log(obj.image_url)
  let data = new FormData()
  data.append('companyName', obj.companyName)
  data.append('companyId', obj.companyId)
  data.append('name', obj.name)
  data.append('product', obj.productName)
  data.append('application', obj.application)
  data.append('price', obj.price)
  data.append('image_url', obj.image_url)
  data.append('contactDetails[contactEmail]', obj.companyDetails.contactEmail)
  data.append('contactDetails[contactName]', obj.companyDetails.contactName)
  data.append('contactDetails[contactNumber]', obj.companyDetails.contactNumber)
  data.append('contactDetails[location]', obj.companyDetails.location)
  data.append('contactDetails[address]', obj.companyDetails.address)
  //   console.log(data)

  //   for(var pair of data.entries()){
  //       console.log(pair[0]+','+pair[1]);
  //   }
  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/fertilizer/add`, {
      method: 'POST',
      headers: {
        authorization: getToken,
        Accept: 'application/json'
      },
      body: data
    })

    const getData = await result.json()
    // console.log(getData)
    dispatch(addFertilizer(getData.data))
  }
}
export function addPesticideAction (obj) {
  getToken = localStorage.getItem('token')
  // console.log(obj)
  let data = new FormData()
  data.append('companyName', obj.companyName)
  data.append('companyId', obj.companyId)
  data.append('pesticideName', obj.name)
  data.append('pesticideDescription', obj.description)
  data.append('price', obj.price)
  data.append('image_url', obj.image)
  data.append('contactDetails[contactEmail]', obj.companyDetails.contactEmail)
  data.append('contactDetails[contactName]', obj.companyDetails.contactName)
  data.append('contactDetails[contactNumber]', obj.companyDetails.contactNumber)
  data.append('contactDetails[location]', obj.companyDetails.location)
  data.append('contactDetails[address]', obj.companyDetails.address)
  // //   console.log(data)

  //   for(var pair of data.entries()){
  //       console.log(pair[0]+','+pair[1]);
  //   }
  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/pesticide/add`, {
      method: 'POST',
      headers: {
        authorization: getToken,
        Accept: 'application/json'
      },
      body: data
    })

    const getData = await result.json()
    // console.log(getData)
    dispatch(addPesticide(getData.data))
  }
}
export function addMachineryAction (obj) {
  getToken = localStorage.getItem('token')
  // console.log(obj)

  // console.log(obj.image_url)
  let data = new FormData()
  data.append('companyName', obj.companyName)
  data.append('companyId', obj.companyId)
  data.append('machineName', obj.name)
  data.append('machineDescription', obj.description)
  data.append('price', obj.price)
  data.append('image_url', obj.image)
  data.append('contactDetails[contactEmail]', obj.companyDetails.contactEmail)
  data.append('contactDetails[contactName]', obj.companyDetails.contactName)
  data.append('contactDetails[contactNumber]', obj.companyDetails.contactNumber)
  data.append('contactDetails[location]', obj.companyDetails.location)
  data.append('contactDetails[address]', obj.companyDetails.address)

  //   for(var pair of data.entries()){
  //       console.log(pair[0]+','+pair[1]);
  //   }
  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/machine/add`, {
      method: 'POST',
      headers: {
        authorization: getToken,
        Accept: 'application/json'
      },
      body: data
    })

    const getData = await result.json()
    // console.log(getData)
    dispatch(addMachinery(getData.data))
  }
}
export function deleteMachineryAction (obj) {
  console.log(obj)
  getToken = localStorage.getItem('token')

  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/machine/delete`, {
      method: 'DELETE',
      headers: {
        authorization: getToken,
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(obj)
    })

    const getData = await result.json()
    console.log(getData)
  }
}
export function deleteFertilizerAction (obj) {
  console.log(obj)
  getToken = localStorage.getItem('token')

  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/fertilizer/delete`, {
      method: 'DELETE',
      headers: {
        authorization: getToken,
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(obj)
    })

    const getData = await result.json()
    console.log(getData)
  }
}
export function deletePesticideAction (obj) {
  console.log(obj)
  getToken = localStorage.getItem('token')

  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/pesticide/delete`, {
      method: 'DELETE',
      headers: {
        authorization: getToken,
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(obj)
    })

    const getData = await result.json()
    console.log(getData)
  }
}

export function updateFetilizerAction (obj) {
  console.log(obj)
  getToken = localStorage.getItem('token')
  let data = new FormData()
  data.append('name', obj.name)
  data.append('product', obj.productName)
  data.append('price', obj.price)
  data.append('application', obj.application)
  data.append('image_url', obj.image_url)
  data.append('_id', obj.selectId)
  data.append('companyId', obj.companyId)
  data.append('companyName', obj.companyName)
  data.append('contactDetails[contactNumber]', obj.companyDetails.contactNumber)
  data.append('contactDetails[contactEmail]', obj.companyDetails.contactEmail)
  data.append('contactDetails[contactName]', obj.companyDetails.contactName)
  data.append('contactDetails[location]', obj.companyDetails.location)
  data.append('contactDetails[address]', obj.companyDetails.address)

  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/fertilizer/update`, {
      method: 'PUT',
      headers: {
        authorization: getToken
        // 'Content-Type': 'application/json; charset=utf-8'
      },
      body: data
    })

    const getData = await result.json()
    console.log(getData)
    dispatch(updateFertlizer(getData.data))
  }
}
export function updateMachineryAction (obj) {
  console.log(obj)
  getToken = localStorage.getItem('token')
  let data = new FormData()
  data.append('machineName', obj.name)
  data.append('machineDescription', obj.description)
  data.append('price', obj.price)
  data.append('image_url', obj.image)
  data.append('machineId', obj.selectId)
  data.append('companyId', obj.companyId)
  data.append('companyName', obj.companyName)
  data.append('contactDetails[contactNumber]', obj.companyDetails.contactNumber)
  data.append('contactDetails[contactEmail]', obj.companyDetails.contactEmail)
  data.append('contactDetails[contactName]', obj.companyDetails.contactName)
  data.append('contactDetails[location]', obj.companyDetails.location)
  data.append('contactDetails[address]', obj.companyDetails.address)

  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/machine/update`, {
      method: 'PUT',
      headers: {
        authorization: getToken
        // 'Content-Type': 'application/json; charset=utf-8'
      },
      body: data
    })

    const getData = await result.json()
    console.log(getData)
    dispatch(updateMachinery(getData.data))
  }
}
export function updatePesticideAction (obj) {
  console.log(obj)
  getToken = localStorage.getItem('token')
  let data = new FormData()
  data.append('pesticideName', obj.name)
  data.append('pesticideDescription', obj.description)
  data.append('price', obj.price)
  data.append('image_url', obj.image)
  data.append('pesticideId', obj.selectId)
  data.append('companyId', obj.companyId)
  data.append('companyName', obj.companyName)
  data.append('contactDetails[contactNumber]', obj.companyDetails.contactNumber)
  data.append('contactDetails[contactEmail]', obj.companyDetails.contactEmail)
  data.append('contactDetails[contactName]', obj.companyDetails.contactName)
  data.append('contactDetails[location]', obj.companyDetails.location)
  data.append('contactDetails[address]', obj.companyDetails.address)

  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/pesticide/update`, {
      method: 'PUT',
      headers: {
        authorization: getToken
        // 'Content-Type': 'application/json; charset=utf-8'
      },
      body: data
    })

    const getData = await result.json()
    console.log(getData)
    dispatch(updatePesticide(getData.data))
  }
}
export function getAllFertilizerAction () {
  getToken = localStorage.getItem('token')

  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/fertilizer/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        authorization: getToken
      }
    })

    const getData = await result.json()
    console.log(getData.fertilizers)
    dispatch(getAllFertilizer(getData.fertilizers))
  }
}
export function getAllPesticideAction () {
  getToken = localStorage.getItem('token')

  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/pesticide/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        authorization: getToken
      }
    })

    const getData = await result.json()
    console.log(getData.pesticides)
    dispatch(getAllPesticide(getData.pesticides))
  }
}
export function getAllMachineryAction () {
  getToken = localStorage.getItem('token')

  return async dispatch => {
    const result = await fetch(`${ROOT_URL}/machine/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        authorization: getToken
      }
    })

    const getData = await result.json()
    console.log(getData.machines)
    dispatch(getAllMachinery(getData.machines))
  }
}
function getFertilizer (data) {
  return {
    type: ActionTypes.GET_FERTILIZER,
    payload: data
  }
}
function getPesticide (data) {
  return {
    type: ActionTypes.GET_PESTICIDE,
    payload: data
  }
}
function getMachinery (data) {
  return {
    type: ActionTypes.GET_MACHINERY,
    payload: data
  }
}
function addFertilizer (data) {
  return {
    type: ActionTypes.ADD_FERTILIZER,
    payload: data
  }
}
function addMachinery (data) {
  return {
    type: ActionTypes.ADD_MACHINERY,
    payload: data
  }
}

function addPesticide (data) {
  return {
    type: ActionTypes.ADD_PESTICIDE,
    payload: data
  }
}
function updateFertlizer (data) {
  return {
    type: ActionTypes.UPDATE_FERTILIZER,
    payload: data
  }
}
function updateMachinery (data) {
  return {
    type: ActionTypes.UPDATE_MACHINERY,
    payload: data
  }
}
function updatePesticide (data) {
  return {
    type: ActionTypes.UPDATE_PESTICIDE,
    payload: data
  }
}
function getAllFertilizer (data) {
  return {
    type: ActionTypes.GET_ALL_FERTILIZER,
    payload: data
  }
}
function getAllMachinery (data) {
  return {
    type: ActionTypes.GET_ALL_MACHINERY,
    payload: data
  }
}
function getAllPesticide (data) {
  return {
    type: ActionTypes.GET_ALL_PESTICIDE,
    payload: data
  }
}
// function deleteMachinery () {}
