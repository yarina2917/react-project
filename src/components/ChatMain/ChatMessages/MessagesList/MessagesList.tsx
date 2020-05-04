import React, { useState, useEffect } from 'react';

import Message from './Message/Message';

import services from '../../../../services';

import { IMessage } from '../ChatMessages.interface';

import './style.scss'

const MessagesList = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    services.chats.getMessages('')
      .then((res) => setMessages(res.data))
      .catch((err) => console.error(err))
  });
  return (
    <div className="message-list-container">
      {messages.map(message => <Message key={message._id} message={message}/>)}
    </div>
  )
};

export default MessagesList
