import React, { Component } from 'react';
import {
  Button,
  Card,
  Input,
  Row,
} from 'antd';
import { compose, withHandlers } from 'recompose';
import io from 'socket.io-client';

import Chat from './Chat';
import { setMessage, setChatMessages } from './redux/actions';
import { store } from '../../mainRedux/store';

const socket = io()
//const chatMessages = ["test"];



class ChatCard extends Component {

  componentDidMount() {
    socket.on('chat message', (msg) => {
      //UPDATE CHATMESSAGE STATE TO DISPLAY NEW MESSAGES VIA NEW ARRAY
      const arrayPlaceholder = this.props.chatMessages.slice();
      arrayPlaceholder.push(msg)
      this.props.dispatch(setChatMessages(arrayPlaceholder))
      return false;
    })
  };

  render() {
    return(
      <Card
        title="Chat with this amazing bot"
        className="removeHover w-50"
      >
        <Chat chatMessages={this.props.chatMessages} />

        <Row>
          <Input
            placeholder="Send message"
            className="width__75"
            value={this.props.message}
            onChange={(e) => this.props.dispatch(setMessage(e.target.value))}
            onPressEnter={(e) => this.props.sendMessage(e)}
          />
          <Button
            type="primary"
            className="ml3"
            onClick={(e) => this.props.sendMessage(e)}
          >
            Send
          </Button>
        </Row>
      </Card>
    )
  }
}

const ChatCardContainer = compose(
  withHandlers({
    sendMessage: ({ chatMessages, dispatch, message }) => (e) => {
      e.preventDefault();
      socket.emit('chat message', message);
      dispatch(setMessage(''));
    },
  })
)(ChatCard)

export default ChatCardContainer;
