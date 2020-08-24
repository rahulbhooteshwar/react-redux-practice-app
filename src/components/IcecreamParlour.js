import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIcecream } from '../redux/icecream/icecream.actions'

function IcecreamParlour() {
  console.log('IcecreamParlour shop rendering')
  const icecream = useSelector(state => state.icecream)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Icecream Parlour</h1>
      <h2>ICECREAMS</h2> {icecream.noOfIcecreams}
      <button onClick={() => dispatch(buyIcecream())}>Buy</button>
    </div>
  )
}

export default IcecreamParlour
