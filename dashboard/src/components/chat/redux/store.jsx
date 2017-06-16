import { createStore } from 'redux'
import { messageHandler } from './reducers'

export const store = createStore(messageHandler, { message: 'test', alt: "asd" })
