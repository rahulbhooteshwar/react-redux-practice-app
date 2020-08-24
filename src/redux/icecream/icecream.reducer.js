import {BUY_ICECREAM} from './icecream.types'
const icecreamInitialState = {
  noOfIcecreams: 10
}
const icecreamReducer = (state = icecreamInitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIcecreams: state.noOfIcecreams - 1
      }
    default:
      return state
  }
}
export default icecreamReducer