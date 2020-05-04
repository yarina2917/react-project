import React from 'react';

import { REPORT } from "../../../../../constants/messageTypes";

import { MessageProps as Props } from './Message.interface';

const Message: React.FC<Props> = ({ message }) => {
  return (
    <div className="single-message-container">
      <div className="message-details-container">
        <div className="author-container">
          {message.messageType !== REPORT && <h1 className="author">{message.user.username}</h1> }
          <span className="date">{message.createdAt}</span>
        </div>
        <div className="message-container">
          <p className="message">{message.message}</p>
        </div>
      </div>
    </div>
  )
};

export default Message
