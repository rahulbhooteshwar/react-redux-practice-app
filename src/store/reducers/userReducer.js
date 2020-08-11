import { INIT_USERS } from "../actions/userActions"

const userReducer = (state=[], { type, payload }) => {
  switch (type) {
    case INIT_USERS:
      return payload
    default:
      console.log(type, state)
      return state
  }
}
export default userReducer