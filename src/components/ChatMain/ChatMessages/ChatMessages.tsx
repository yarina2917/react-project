import React from 'react';

import { ChatMessagesProps as Props } from './ChatMessages.interface';

import './style.scss';

const ChatMessages: React.FC<Props> = ({ activeChat }) => {
  return (
     <div className="chat-messages">
       {!activeChat?._id && (
         <div className="select-chat">
          <p>Please select a chat to start messaging</p>
         </div>
       )}
     </div>
  )
};

export default ChatMessages
