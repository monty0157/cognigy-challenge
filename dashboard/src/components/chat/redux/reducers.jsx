import { SET_MESSAGE } from './actions'

const initialState = {
  message: '',
}

export function messageReducer(state = initialState, action) {
  switch (action.type) {

    case SET_MESSAGE:
      return {
        ...state,
        message: action.message
      };

    default:
      return state
  }
}
