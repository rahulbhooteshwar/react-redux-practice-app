import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cake/cake.actions'

function CakeShop() {
  console.log('cake shop rendering')
  const cake = useSelector(state => state.cake)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Cake Shop</h1>
      <h2>CAKES</h2>  {cake.noOfCakes}
      <button onClick={()=> dispatch(buyCake())}>Buy</button>
    </div>
  )
}

export default CakeShop
