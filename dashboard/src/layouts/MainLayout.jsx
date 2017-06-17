import React from 'react';
import Wrapper from '../components/Wrapper';
import ChatCardContainer from '../components/chat/ChatCard';
import { connect } from 'react-redux';

const MainLayout = function MainLayout({ message, dispatch, chatMessages }) {

  return (
    <Wrapper>
      <ChatCardContainer
        message={message}
        chatMessages={chatMessages}
        dispatch={dispatch}
      />
    </Wrapper>
  )
};

const MainLayoutConnect = connect((store) => {

  return {
    message: store.messageReducer.message,
    chatMessages: store.messageReducer.chatMessages,
    dispatch: store.dispatch,
  };
})(MainLayout);

export default MainLayoutConnect;
