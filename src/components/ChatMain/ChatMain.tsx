import React from 'react';

import ChatHeader from './ChatHeader/ChatHeaderContainer';
import ChatLists from './ChatLists/ChatListsContainer';
import ChatMessages from './ChatMessages/ChatMessageContainer';
import ChatModal from './ChatModal/ChatModalContainer';

import './style.scss';

const ChatMain = () => {
  return (
    <div className="chat-main">
      <ChatHeader/>
      <div className="chat-container">
        <ChatLists/>
        <ChatMessages/>
      </div>
      <ChatModal/>
    </div>
  )
};

export default ChatMain
