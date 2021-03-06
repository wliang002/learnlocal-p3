import uuid from 'uuid'
// @resources https://github.com/reduxjs/redux
// thunk middleware allows multiple dispatch actions, setAlert action is called from Alert component
export const setAlert = (msg, alertType, timeout = 3000) => dispatch => {
  const id = uuid.v4()
  // dispatch this type in reducer
  dispatch({
    // call set_alert in the reducer
    type: 'SET_ALERT',
    // send payload to reducer
    payload: { msg, alertType, id }
  })
  // alert removed after 5 seconds
  setTimeout(() => dispatch({ type: 'REMOVE_ALERT', payload: id }), timeout)
}
