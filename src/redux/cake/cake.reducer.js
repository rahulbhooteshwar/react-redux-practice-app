import { BUY_CAKE } from './cake.types'

const cakeInitialState = {
  noOfCakes: 10
}

const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1
      }
    default:
      return state
  }
}

export default cakeReducer