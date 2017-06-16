import { SET_MESSAGE } from './actions'
import { SET_CHATMESSAGES } from './actions'

const initialState = {
  message: '',
  chatMessages: [],
}

export function messageReducer(state = initialState, action) {
  switch (action.type) {

    case SET_MESSAGE:
      return {
        ...state,
        message: action.message
      };

    case SET_CHATMESSAGES:
      return {
        ...state,
        chatMessages: action.chatMessages
      };

    default:
      return state
  }
}
