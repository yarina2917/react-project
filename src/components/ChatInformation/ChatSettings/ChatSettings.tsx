import React from 'react';

import Avatar from '../../ChatMain/Avatar/Avatar';

import socket from '../../../services/socket';

import { ChatSettingsData as Props } from '../ChatInformations.interface';

import PersonIcon from '@material-ui/icons/Person';
import ReorderIcon from '@material-ui/icons/Reorder';

import { CHANNEL } from '../../../constants/chatTypes';

const ChatSettings: React.FC<Props> = ({ data }) => {
  const removeMember = (userId: string) => {
    socket.sendEvent('remove-members', {chatId: data.chatId, userId})
  };
  return (
    <div className="chat-settings">
      <div className="add-member">
        <PersonIcon/>
        <span className="link">Add members</span>
      </div>
      <div className="users-chat">
        <ReorderIcon/>
        <ul className="users-chat-list">
          {data.chatUsers.map((user: any) => (
            <li key={user._id}>
              <Avatar avatarUrl={data.chatImage} username={data.chatName}/>
              <div className="user-info">
                <p className="link">{user.username}</p>
                {(data.editChat && data.userId !== user._id) && <p className="link" onClick={() => removeMember(user._id)}>Remove</p>}
                {(data.type !== CHANNEL && data.userId === user._id) && <p className="link" onClick={() => removeMember(user._id)}>Delete and exit</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default ChatSettings
