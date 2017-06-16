import { SET_MESSAGE } from './actions'

const initialState = {
  message: '',
}

export function messageHandler(state = initialState, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return action.text;

    default:
      return state
  }
}
