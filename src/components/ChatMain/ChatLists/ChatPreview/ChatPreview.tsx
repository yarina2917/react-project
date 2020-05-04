import React from 'react'

import Avatar from '../../Avatar/Avatar';

import { ChatPreviewProps as Props } from '../ChatLists.interface';

const ChatPreview: React.FC<Props> = ({ chat, selectChat, activeChatId }) => {
  return (
    <li onClick={() => selectChat(chat)} className={activeChatId === chat._id ? 'active-chat' : ''}>
      <Avatar username={chat.chatName} avatarUrl={chat.avatar.url}/>
      <div className="chat-data">
        <div className="chat-info">
          <span className="chat-name">{chat.chatName}</span>
          <span className="chat-date">{new Date(chat.lastMessage.createdAt).toLocaleTimeString('it-IT', {hour: 'numeric', minute: 'numeric'})}</span>
        </div>
        <p className="chat-message">{chat.lastMessage.authorId.username + ': ' + chat.lastMessage.message}</p>
      </div>
    </li>
  )
};

export default ChatPreview
