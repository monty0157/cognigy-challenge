import React from 'react';
import {
  Button,
  Card,
  Input,
  Row,
} from 'antd';

const ChatCard = function ChatCard() {

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
        >
          Send
        </Button>
      </Row>
    </Card>
  )
}

export default ChatCard;
