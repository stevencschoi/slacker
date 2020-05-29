import {
  ADD_COUNT,
  REDUCE_COUNT
} from './countTypes'

const initialState = {
  count: 0
}

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return {
        ...state,
        count: state.count + action.payload
      }
    case REDUCE_COUNT:
      return {
        ...state,
        count: state.count - action.payload
      }
    default: return state
  }
}

export default countReducer