import React from 'react';
import './App.css';
import { UPDATE_PERSON } from './store/actions/personActions';
import { UPDATE_GAME } from './store/actions/gameActions';
import { connect } from 'react-redux';
import { fetchUsers } from './store/actions/userActions';

function App(props) {
  return (
    <div className="App">
      <h1>Redux tutorial</h1>
      Person Name: {props.person.name}
      <br />
      Game Name: {props.game.name}
      <br />
      <button onClick={props.updatePerson}>Update Person</button>
      <br />
      <button onClick={props.updateGame}>Update Game</button>
      <br />
      <button onClick={props.fetchUsers}>Fetch Users</button>
      {JSON.stringify(props.users)}
    </div>
  );
}

const mapStateToProps = (state) => {
  // return state;
  return {
    game: state.game,
    person: state.person,
    users: state.users
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    updatePerson: () => dispatch({ type: UPDATE_PERSON, 'payload': 'Seema' }),
    updateGame: () => dispatch({ type: UPDATE_GAME, 'payload': 'Hockey' }),
    // following approach throws error & works only with redux-thunk
    // fetchUsers: ()=> dispatch(fetchUsers)
    // following works without redux-thunk & no special setup at all
    fetchUsers: ()=> fetchUsers(dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
