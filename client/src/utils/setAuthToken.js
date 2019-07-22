
import axios from 'axios'

// adding a global header
const setAuthToken = token => {
  // see if there's a token in the local storage
  if (token) {
    // send the request
    axios.defaults.headers.common['x-auth-token'] = token
  } else {
    // if there's no token passed in delete it  
    delete axios.defaults.headers.common['x-auth-token']
  }
}

export default setAuthToken
