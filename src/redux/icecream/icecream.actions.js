import { BUY_ICECREAM } from "./icecream.types";

export function buyIcecream(payload) {
  return {
    type: BUY_ICECREAM,
    payload
  }
}