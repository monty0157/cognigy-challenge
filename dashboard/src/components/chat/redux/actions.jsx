export const SET_MESSAGE = "SET_MESSAGE";
export const SET_CHATMESSAGES = "SET_CHATMESSAGES";

export function setMessage(text) {
  return {
    type: SET_MESSAGE,
    message: text,
  }
};

export function setChatMessages(array) {
  return {
    type: SET_CHATMESSAGES,
    chatMessages: array,
  }
};
