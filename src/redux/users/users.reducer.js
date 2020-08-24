import { USERS_LOADING, USERS_DATA, USERS_ERROR } from "./users.types"

const initialState = {
  loading: false,
  error: '',
  data: []
}

const usersReducer = (state=initialState, action) => {
  switch (action.type) {
    case USERS_LOADING:
      return { ...state, loading: true }
    case USERS_ERROR:
      return { ...state, loading: false, error: action.payload }
    case USERS_DATA:
      return {...state, loading: false, data: action.payload}
    default:
      return state
  }
}

export default usersReducer