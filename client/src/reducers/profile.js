import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE
} from '../actions/types'

// create initial state
const initialState = {
  // hold user profile data and other profile data
  profile: null,
  // list of profiles
  profiles: [],
  loading: true,
  error: {}
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      }
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default:
      return state
  }
}
