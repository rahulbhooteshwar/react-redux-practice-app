import React from 'react';
import './App.css';
import IcecreamParlour from './components/IcecreamParlour';
import CakeShop from './components/CakeShop';
import Users from './components/Users';

function App() {
  console.log('App init')
  return (
    <div className="App">
      <IcecreamParlour />
      <CakeShop/>
      <Users/>
    </div>
  );
}
export default App