import React from 'react';
import { useDispatch } from 'react-redux';

import Avatar from '../../ChatMain/Avatar/Avatar';

import socket from '../../../services/socket';

import { ChatSettingsData as Props } from '../ChatInformations.interface';

import { CHANNEL } from '../../../constants/chatTypes';
import actions from '../../../redux/chats/actions';

import ReorderIcon from '@material-ui/icons/Reorder';

const ChatSettings: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  const removeMember = (userId: string, removeUser?: boolean) => {
    socket.sendEvent('remove-members', {chatId: data.chatId, userId});
    if (removeUser) {
      dispatch(actions.updateChatInformation({chatUsers: data.chatUsers.filter((user: any) => user._id !== userId)}))
    }
  };
  return (
    <div className="chat-settings">
      <div className="users-chat">
        <ReorderIcon/>
        <ul className="users-chat-list">
          {data.chatUsers.map((user: any) => (
            <li key={user._id}>
              <Avatar avatarUrl={data.chatImage} username={data.chatName}/>
              <div className="user-info">
                <p>{user.username}</p>
                {(data.editChat && data.userId !== user._id) && <p className="link" onClick={() => removeMember(user._id, true)}>Remove</p>}
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
