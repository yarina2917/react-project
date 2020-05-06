import React, {useEffect} from 'react';

import services from '../../../services';

import { ChatListsProps as Props } from './ChatLists.interface';

import ChatPreview from './ChatPreview/ChatPreview';

import './style.scss';

const ChatLists: React.FC<Props> = ({ chatLists, activeChatId, userId, getChats, selectChat, updateChats, closeModal }) => {
  useEffect(() => {
    getChats();
  }, []);

  useEffect(() => {
    services.socket.removeMembers((err, data) => deleteChat(data));
    services.socket.deleteChat((err, data) => deleteChat(data, true));
    return () => {
      services.socket.clearSubscribe(['notify-remove-members', 'notify-delete-chat'])
    }
  }, [userId, activeChatId]);

  const deleteChat = (data: any, isDelete?: boolean) => {
    if (data.userId === userId || isDelete) {
      updateChats(chatLists.filter(chat => chat._id !== data.chatId));
      if (activeChatId === data.chatId) {
        selectChat({});
        closeModal();
      }
    }
  };

  return (
     <div className="chat-lists">
       <ul>
         {chatLists.map((chat) => (
           <ChatPreview key={chat._id} chat={chat} selectChat={(chat) => selectChat(chat)} activeChatId={activeChatId}/>
         ))}
       </ul>
     </div>
  )
};

export default ChatLists
