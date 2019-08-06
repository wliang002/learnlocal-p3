
// initial state contains object with id, msg and alertType
const initialState = []
// action contains type and payload(data)
export default (state = initialState, action) => {
  const { type, payload } = action
  // evaluate type
  switch (type) {
    case 'SET_ALERT':
      // add the alert to the state
      return [...state, payload]
    case 'REMOVE_ALERT':
      // remove the alet from state
      return state.filter(alert => alert.id !== payload)
    default:
      return state
  }
}
