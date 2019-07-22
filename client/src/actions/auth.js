import axios from 'axios'
import { setAlert } from './alert'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types'

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