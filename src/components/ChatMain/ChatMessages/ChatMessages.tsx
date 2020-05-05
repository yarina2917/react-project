import React from 'react';

import TextEditor from './TextEditor/TextEditor';
import MessagesList from './MessagesList/MessagesListContainer';
import MessagesActions from './MessagesActions/MessagesActions';

import services from '../../../services'

import { ChatMessagesProps as Props } from './ChatMessages.interface';

import './style.scss';

const ChatMessages: React.FC<Props> = ({ activeChat, selectedMessages, setSelectedMessage }) => {
  const handleDelete = () => {
    services.socket.getSocket().emit('delete-messages', {
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
          { !selectedMessages.length && <TextEditor activeChat={activeChat}/> }
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
