import React, {useState} from 'react';

import ChatsListsManage from './ChatsListsManage/ChatsListsManageContainer';
import Contacts from './Contacts/ContactsPage';
import NewChat from './NewChat/NewChat';

import { Button } from '@material-ui/core';
import './style.scss';

const ChatsManage = () => {
  const [activeMenu, setActiveMenu] = useState('chats');
  return (
    <div className="manage-chats-container">
      <ul className="manage-chats-nav">
        <li onClick={() => setActiveMenu('chats')}><Button color="primary">Chats list</Button></li>
        <li onClick={() => setActiveMenu('contacts')}><Button color="primary">Contacts</Button></li>
        <li onClick={() => setActiveMenu('create')}><Button color="primary">Create chat</Button></li>
      </ul>
      <div className="manage-chats">
        {activeMenu === 'chats' && <ChatsListsManage/>}
        {activeMenu === 'contacts' && <Contacts/>}
        {activeMenu === 'create' && <NewChat/>}
      </div>
    </div>
  )
};

export default ChatsManage
