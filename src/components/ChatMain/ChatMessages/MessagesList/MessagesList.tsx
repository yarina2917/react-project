import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import Message from './Message/MessageContainer';

import services from '../../../../services';

import { IMessage } from '../ChatMessages.interface';
import { MessagesListInterface as Props } from './MessagesList.interface';

import './style.scss';

const MessagesList: React.FC<Props> = ({ activeChat, updateChatMessage }) => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    services.chats.getMessages('')
      .then((res) => setMessages(res.data))
      .catch((err) => console.error(err))
  }, [activeChat]);

  useEffect(() => {
    services.socket.getMessage((err, data) => {
      if (!err) {
        updateChatMessage(data);
        if (data.chatId === activeChat._id) {
          setMessages(prevMessages => [data, ...prevMessages]);
        }
      }
    });
    services.socket.deleteMessage((err, data) => {
      if (!err && data.chatId === activeChat._id) {
        setMessages(prevMessages => prevMessages.filter(message => !data.messages.includes(message._id)))
      }
    });
    return () => {
      services.socket.clearSubscribe(['notify-message', 'notify-delete-message'])
    }
  }, [activeChat._id]);


  return (
    <div className="message-list-container">
      {messages.map(message => <Message key={message._id} message={message}/>)}
    </div>
  )
};

export default MessagesList
