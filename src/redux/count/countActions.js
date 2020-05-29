import {
  ADD_COUNT,
  REDUCE_COUNT
} from './countTypes'

export const add = (number = 1) => {
  return {
    type: ADD_COUNT,
    payload: number
  }
}

export const reduce = (number = 1) => {
  return {
    type: REDUCE_COUNT,
    payload: number
  }
}