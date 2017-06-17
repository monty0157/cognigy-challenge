import React from 'react';
import Wrapper from '../components/Wrapper';
import ChatCardContainer from '../components/chat/ChatCard';
import { connect } from 'react-redux';
import TopBar from '../components/TopBar';

const MainLayout = function MainLayout({ message, dispatch, chatMessages }) {

  return (
    <div className="h-100">
      <TopBar />
      <Wrapper>
        <ChatCardContainer
          message={message}
          chatMessages={chatMessages}
          dispatch={dispatch}
        />
      </Wrapper>
    </div>
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
