import React from 'react';
import {
  Button,
  Card,
  Input,
  Row,
} from 'antd';
import { compose, withHandlers, lifecycle } from 'recompose';
import io from 'socket.io-client';

import Chat from './Chat';
import { setMessage, setChatMessages } from './redux/actions';

const socket = io()

const ChatCard = function ChatCard({ chatMessages, dispatch, sendMessage, message }) {

  return(
    <Card
      title="Chat with this amazing bot"
      className="removeHover w-50"
    >
      <Chat chatMessages={chatMessages} />

      <Row>
        <Input
          placeholder="Send message"
          className="width__75"
          value={message}
          onChange={(e) => dispatch(setMessage(e.target.value))}
          onPressEnter={(e) => sendMessage(e)}
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
  withHandlers({
    sendMessage: ({ chatMessages, dispatch, message }) => (e) => {
      e.preventDefault();
      socket.emit('chat message', message);
      dispatch(setMessage(''));
    },
  }),
  lifecycle({
    componentDidMount() {
      socket.on('chat message', (msg) => {
        //UPDATE CHATMESSAGE STATE TO DISPLAY NEW MESSAGES VIA NEW ARRAY
        const arrayPlaceholder = this.props.chatMessages.slice();
        arrayPlaceholder.push(msg)
        this.props.dispatch(setChatMessages(arrayPlaceholder))
        return false;
      })
    }
  })
)(ChatCard)

export default ChatCardContainer;
