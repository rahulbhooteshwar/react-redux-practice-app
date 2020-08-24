import React from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/users/users.actions';

function Users({ users, dispatch }) {
  console.log('Users init')
  return (
    <div>
      Loading: {users.loading}
      Error: {users.error}
      Data: {JSON.stringify(users.data)}
      <button onClick={()=> dispatch(fetchUsers())}>Load Data</button>
    </div>
  )
}
const mapStateToProps = state => ({ users: state.users })
const mapDispatchToProps = dispatch => ({ dispatch })
export default connect(mapStateToProps, mapDispatchToProps)(Users);
