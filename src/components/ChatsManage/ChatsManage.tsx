import React, {useState} from 'react';

import classNames from 'classnames';

import ChatsListsManage from './ChatsListsManage/ChatsListsManageContainer';
import Contacts from './Contacts/ContactsPage';
import NewChat from './NewChat/NewChat';

import { Button } from '@material-ui/core';
import './style.scss';

const menuConfig = [{
    title: 'Chats list',
    value: 'chats'
  }, {
    title: 'Contacts',
    value: 'contacts'
  }, {
    title: 'Create chat',
    value: 'create'
  }
];

const ChatsManage = () => {
  const [activeMenu, setActiveMenu] = useState('chats');
  return (
    <div className="manage-chats-container">
      <ul className="manage-chats-nav">
        {menuConfig.map(item => (
          <li key={item.value}
            onClick={() => setActiveMenu(item.value)}
            className={classNames({'active-item': activeMenu === item.value})}
          >
            <Button color="primary">{item.title}</Button>
          </li>
        ))}
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
