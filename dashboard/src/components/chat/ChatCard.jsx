import React from 'react';
import {
  Button,
  Card,
  Input,
  Row,
} from 'antd';
import { compose, withHandlers, withState } from 'recompose';
//import Chat from './Chat';
import io from 'socket.io-client';
import { messageHandler } from './redux/reducers';
import { setMessage } from './redux/actions';
import { messageStore } from './redux/store';

const socket = io()
//const chatMessages = ["hi"];
messageStore.dispatch(setMessage('a'))
console.log(messageStore.getState())
messageHandler('', setMessage("test"))
console.log(messageStore.getState())
const ChatCard = function ChatCard({ sendMessage, chatMessages, message, setMessageC }) {

  return(
    <Card
      title="Chat with this amazing bot"
      className="removeHover w-50"
    >
      {chatMessages.map((msg) =>
        <p>{msg}</p>
      )}
      <Row>
        <Input
          placeholder="Send message"
          className="width__75"
          value={message}
          onChange={(e) => setMessageC(e.target.value)}
        />
        <Button
          type="primary"
          className="ml3"
          onClick={(e) => sendMessage(e)}
        >
          Send
        </Button>
      </Row>
    </Card>
  )
}

const ChatCardContainer = compose(
  //USING STATE WITH COMPOSE INSTEAD OF REDUX
  withState('message','setMessageC', ''),
  withState('chatMessages', 'setChatMessages', []),
  withHandlers({
    sendMessage: ({ chatMessages, setChatMessages, setMessageC, message }) => (e) => {
      e.preventDefault();
      console.log(messageStore.getState())
      socket.emit('chat message', message);
      socket.on('chat message', (msg) => {
        console.log(msg)
        const asd = chatMessages.slice()
        asd.push(msg)
        setChatMessages(asd)
        console.log(chatMessages)
        messageStore.dispatch(setMessage(''))
        setMessageC('')
        return false;
      })
    }
  })
)(ChatCard)

export default ChatCardContainer;
