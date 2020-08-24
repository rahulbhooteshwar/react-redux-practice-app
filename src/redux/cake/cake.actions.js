import { BUY_CAKE } from "./cake.types";

export function buyCake(payload) {
  return {
    type: BUY_CAKE,
    payload
  }
}