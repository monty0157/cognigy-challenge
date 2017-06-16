import { createStore } from 'redux'
import { messageHandler } from './reducers'

export let messageStore = createStore(messageHandler)
