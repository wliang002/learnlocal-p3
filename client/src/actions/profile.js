import axios from 'axios'
import { setAlert } from './alert'

import {
  GET_PROFILE,
  PROFILE_ERROR
} from './types'

// Get current users profile
// geting api/profile/me return the user id
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/profile/me')
    // put profile data to state
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}
