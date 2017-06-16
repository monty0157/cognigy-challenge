import React from 'react';
import {
  Button,
  Card,
  Input,
  Row,
} from 'antd';
import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import Chat from './Chat';
import { setMessage } from './redux/actions';

const socket = io()

const ChatCard = function ChatCard({ sendMessage, chatMessages, dispatch, message }) {

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
  //USING STATE WITH COMPOSE INSTEAD OF REDUX
  withState('chatMessages', 'setChatMessages', []),
  withHandlers({
    sendMessage: ({ chatMessages, setChatMessages, dispatch, message }) => (e) => {
      e.preventDefault();
      socket.emit('chat message', message);
      socket.on('chat message', (msg) => {

        //UPDATE CHATMESSAGE STATE TO DISPLAY NEW MESSAGES
        const updateChatMessages = chatMessages.slice()
        updateChatMessages.push(msg)
        setChatMessages(updateChatMessages)
        dispatch(setMessage(''))
        return false;
      })
    }
  })
)(ChatCard)

export default ChatCardContainer;
