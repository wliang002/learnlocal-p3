import axios from 'axios'
import { setAlert } from './alert'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR

} from './types'
import setAuthToken from '../utils/setAuthToken'

// Load User
export const loadUser = () => async dispatch => {
  // if there is a token, send it to a global header
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  try {
    const res = await axios.get('/api/auth')
    // payload is the user
    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    })
  }
}

// Register User
export const register = ({ name, email, password }) => async dispatch => {
  // making axio request
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  // prepare the data to send
  const body = JSON.stringify({ name, email, password })

  try {
    // make a post request
    const res = await axios.post('/api/users', body, config)
    dispatch({
      type: REGISTER_SUCCESS,
      // a token will be returned
      payload: res.data
    })
  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: REGISTER_FAIL
    })
  }
}
