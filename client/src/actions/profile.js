import axios from 'axios'
import { setAlert } from './alert'
// @resources https://github.com/reduxjs/redux
// Get current users profile
// geting api/profile/me return the user id
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/profile/me')
    // put profile data to state
    dispatch({
      type: 'GET_PROFILE',
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: 'PROFILE_ERROR',
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// Create or update profile
export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    // make a post request
    const res = await axios.post('/api/profile', formData, config)
    // send the user profile to state
    dispatch({
      type: 'GET_PROFILE',
      payload: res.data
    })
    // send an alert after profile changes
    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'))
    // if creating a new profile, redirect to dashboard
    if (!edit) {
      history.push('/dashboard')
    }
  } catch (err) {
    const errors = err.response.data.errors
    // validation error
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: 'PROFILE_ERROR',
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// Add Classes
export const addClasses = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    // make a put request
    const res = await axios.put('/api/profile/events', formData, config)

    dispatch({
      type: 'UPDATE_PROFILE',
      payload: res.data
    })

    dispatch(setAlert('Class Added', 'success'))

    history.push('/dashboard')
  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: 'PROFILE_ERROR',
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// Get all profiles
// get request to api/profile
export const getProfiles = () => async dispatch => {
  // clear past user profile
  dispatch({ type: 'CLEAR_PROFILE' })

  try {
    const res = await axios.get('/api/profile')

    dispatch({
      type: 'GET_PROFILES',
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: 'PROFILE_ERROR',
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}
// Get profile by ID
export const getProfileById = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/profile/user/${userId}`)

    dispatch({
      type: 'GET_PROFILE',
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: 'PROFILE_ERROR',
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// Sign up for classes
export const studentSignUp = (userId, id, formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const res = await axios.post(`/api/profile/user/${userId}/events/${id}`, formData, config)

    dispatch({
      type: 'UPDATE_PROFILE',
      payload: res.data
    })
    dispatch(setAlert('Signed Up!', 'success'))
    history.push(`/classes/${userId}`)
  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }
    dispatch({
      type: 'PROFILE_ERROR',
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// delete account and profile
// delete request to /api/profile
export const deleteAccount = () => async dispatch => {
  if (window.confirm('Are you sure you want to delete your account? This can not be undone!')) {
    try {
      await axios.delete(`/api/profile`)

      dispatch({
        type: 'DELETE_ACCOUNT'
      })
      dispatch({
        type: 'CLEAR_PROFILE'
      })
      dispatch(setAlert('Account Deleted '))
    } catch (err) {
      dispatch({
        type: 'PROFILE_ERROR',
        payload: { msg: err.response.statusText, status: err.response.status }
      })
    }
  }
}

// delete classes
// delete request to/ api/profile/events/:event_id
export const deleteEvent = id => async dispatch => {
  if (window.confirm('Are you sure you want to delete this class?')) {
    try {
      const res = await axios.delete(`/api/profile/events/${id}`)

      dispatch({
        type: 'UPDATE_PROFILE',
        payload: res.data
      })

      dispatch(setAlert('Class Deleted', 'success'))
    } catch (err) {
      dispatch({
        type: 'PROFILE_ERROR',
        payload: { msg: err.response.statusText, status: err.response.status }
      })
    }
  }
}
