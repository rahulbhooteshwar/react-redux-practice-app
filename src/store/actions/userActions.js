export const INIT_USERS = 'INIT_USERS';
export const fetchUsers = (dispatch) => {
  fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(res => dispatch({type: INIT_USERS, payload: res.data}))
}