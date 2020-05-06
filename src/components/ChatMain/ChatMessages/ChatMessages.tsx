import React from 'react';

import TextEditor from './TextEditor/TextEditor';
import MessagesList from './MessagesList/MessagesListContainer';
import ChatInformation from '../../ChatInformation/ChatInformationContainer'

import services from '../../../services';

import MessagesActions from './MessagesActions/MessagesActions';
import { ChatMessagesProps as Props } from './ChatMessages.interface';

import './style.scss';

const ChatMessages: React.FC<Props> = ({ activeChat, selectedMessages, setSelectedMessage, modalOpen, modalData }) => {
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
       {modalOpen && <ChatInformation data={modalData} modalOpen={modalOpen}/>}
     </div>
  )
};

export default ChatMessages
