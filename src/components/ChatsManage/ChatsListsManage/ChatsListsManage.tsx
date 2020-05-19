import React, {useEffect} from 'react';

import Avatar from '../../ChatMain/Avatar/Avatar';

import { ChatListsManageProps as Props } from './ChatListsManage.interface';
import { DIALOG } from '../../../constants/chatTypes';

import { Button } from '@material-ui/core';

const ChatsListsManage: React.FC<Props> = ({ getChats, chatLists, userId }) => {
  useEffect(() => {
    getChats();
  }, []);
  return (
    <div>
      <h2>Chat lists</h2>
      <ul className="chat-lists-manage">
        {chatLists.map(chat => (
          <li key={chat._id}>
            <Avatar avatarUrl={chat.avatar?.url} username={chat.chatName}/>
            <h3>{chat.chatName}</h3>
            <p>Type: {chat.chatType}</p>
            {chat.chatType !== DIALOG && <p>Role: {chat.admins.includes(userId) ? 'Admin' : 'User'}</p>}
            {chat.chatType !== DIALOG && chat.admins.includes(userId) && <Button color="primary">Edit</Button>}
            <Button color="primary">{chat.admins.includes(userId) || chat.chatType === DIALOG ? 'Delete' : 'Leave'}</Button>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default ChatsListsManage
