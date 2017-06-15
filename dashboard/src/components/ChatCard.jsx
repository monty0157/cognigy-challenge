import React from 'react';
import {
  Button,
  Card,
  Input,
  Row,
} from 'antd';
import { compose, withHandlers } from 'recompose';
import io from 'socket.io-client';
const socket = io()

const ChatCard = function ChatCard({ sendMessage }) {
  const text = "test"
  return(
    <Card
      title="Chat with this amazing bot"
      className="removeHover w-50"
    >
      <Row>
        <Input
          placeholder="Send message"
          className="width__75"
        />
        <Button
          type="primary"
          className="ml3"
          onClick={(e) => sendMessage(e, text)}
        >
          Send
        </Button>
      </Row>
    </Card>
  )
}

const ChatCardContainer = compose(
  withHandlers({
    sendMessage: () => (e, text) => {
      e.preventDefault();
      socket.emit('chat message', text)
    }
  })
)(ChatCard)

export default ChatCardContainer;
