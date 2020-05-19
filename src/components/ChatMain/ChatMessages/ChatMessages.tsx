import React from 'react';

import TextEditor from './TextEditor/TextEditor';
import MessagesList from './MessagesList/MessagesListContainer';

import socket from '../../../services/socket';

import MessagesActions from './MessagesActions/MessagesActions';
import { ChatMessagesProps as Props } from './ChatMessages.interface';

import './style.scss';

const ChatMessages: React.FC<Props> = ({ activeChat, selectedMessages, setSelectedMessage, username, userId }) => {
  const handleDelete = () => {
    socket.sendEvent('delete-messages', {
      messages: selectedMessages,
      chatId: activeChat._id
    });
    setSelectedMessage([])
  };
  return (
     <div className="chat-messages">
       {activeChat?._id && (
        <>
          <MessagesList activeChat={activeChat}/>
          { !selectedMessages.length && <TextEditor activeChat={activeChat} username={username} userId={userId}/> }
          { selectedMessages.length && (
            <MessagesActions cancelSelect={() => setSelectedMessage([])} deleteMessages={handleDelete}/>
          )}
        </>
       )}
       {!activeChat?._id && (
         <div className="select-chat">
          <p>Please select a chat to start messaging</p>
         </div>
       )}
     </div>
  )
};

export default ChatMessages
