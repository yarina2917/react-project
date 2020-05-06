import React from 'react';

import { DIALOG, PROFILE } from '../../../constants/chatTypes';
import { Props } from './ChatHeader.interface';

import './style.scss';

const ChatHeader: React.FC<Props> = ({ activeChat, openModal, userId }) => {
  const openChatSetting = () => {
    openModal({
      type: activeChat.chatType,
      editChat: activeChat.chatType === PROFILE || (activeChat.admins.includes(userId) && activeChat.chatType !== DIALOG),
      chatId: activeChat.chatType === DIALOG ? activeChat.recipientId : activeChat._id
    })
  };
  return (
    <div className="chat-header">
      <div className="chat-header-settings"></div>
      {activeChat?._id && (
        <div className="chat-header-info" onClick={() => openChatSetting()}>
          <span>{activeChat.chatName} </span>
          {activeChat.chatType !== DIALOG && <span>{activeChat.users?.length} members</span>}
        </div>
      )}
    </div>
  )
};

export default ChatHeader
