import React from 'react';
import {
  Button,
  Card,
  Input,
  Row,
} from 'antd';
import { compose, withHandlers, withState } from 'recompose';
import io from 'socket.io-client';
const socket = io()

const ChatCard = function ChatCard({ sendMessage, setMessage, message }) {
  return(
    <Card
      title="Chat with this amazing bot"
      className="removeHover w-50"
    >
      <Row>
        <Input
          placeholder="Send message"
          className="width__75"
          id="chat"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
  withState('message', 'setMessage', ''),
  withHandlers({
    sendMessage: ({ message, setMessage }) => (e) => {
      e.preventDefault();
      console.log(message)
      socket.emit('chat message', message)
      setMessage('');
    }
  })
)(ChatCard)

export default ChatCardContainer;
