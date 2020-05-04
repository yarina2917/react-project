import React from 'react';

import { DIALOG } from '../../../constants/chatTypes';
import { Props } from './ChatHeader.interface';

import './style.scss';

const ChatHeader: React.FC<Props> = ({ activeChat }) => {
  return (
    <div className="chat-header">
      <div className="chat-header-settings"></div>
      {activeChat?._id && (
        <div className="chat-header-info">
          <span>{activeChat.chatName} </span>
          {activeChat.chatType !== DIALOG && <span>{activeChat.users?.length} members</span>}
        </div>
      )}
    </div>
  )
};

export default ChatHeader
