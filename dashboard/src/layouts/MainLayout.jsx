import React from 'react';
import Wrapper from '../components/Wrapper';
import ChatCard from '../components/chat/ChatCard';
import { connect } from 'react-redux';

import { setMessage } from '../components/chat/redux/actions';

const MainLayout = function MainLayout({ message, dispatch }) {

  return (
    <Wrapper>
      <ChatCard
        message={message}
        dispatch={dispatch}
      />
    </Wrapper>
  )
}

const MainLayoutConnect = connect((store) => {
  return {
    message: store.messageReducer.message,
    dispatch: store.dispatch,
  };
})(MainLayout);

export default MainLayoutConnect;
