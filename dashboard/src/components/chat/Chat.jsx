import React from 'react';

const Chat = function Chat({ chatMessages }) {

  return(
    <div>
      {chatMessages.map((msg) =>
        <p>{msg}</p>
      )}
    </div>
  )
}

export default Chat;
