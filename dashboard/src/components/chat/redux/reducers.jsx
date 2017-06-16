import { SET_MESSAGE } from './actions'

const initialState = {
  message: 'asd',
}

export function messageHandler(state = initialState, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return action.text;

    case 't':
      return action.text;

    default:
      return state
  }
}
