import Axios from "axios"
import { USERS_LOADING, USERS_DATA, USERS_ERROR } from "./users.types"

export function loadingUsers() {
  return {
    type: USERS_LOADING
  }
}

export function usersData(data) {
  return {
    type: USERS_DATA,
    payload: data
  }
}

export function usersError(error) {
  return {
    type: USERS_ERROR,
    payload: error
  }
}

export function fetchUsers() {
  return async function (dispatch) {
    dispatch(loadingUsers())
    try {
      const { data } = await Axios.get('https://jsonplaceholder.typicode.com/users')
      dispatch(usersData(data))
    } catch (error) {
      dispatch(usersError(error.message))
    }
  }
}

