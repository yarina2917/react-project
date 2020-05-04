import React, {useEffect} from 'react'

import { ChatListsProps as Props } from './ChatLists.interface';

import ChatPreview from './ChatPreview/ChatPreview';

import './style.scss'

const ChatLists: React.FC<Props> = ({ chatLists, getChats, selectChat, activeChatId }) => {
  useEffect(() => {
    const response = getChats();
  }, []);
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
