import React from 'react';
import classNames from 'classnames';

import Avatar from '../../../Avatar/Avatar';

import { REPORT } from '../../../../../constants/messageTypes';

import { MessageProps as Props } from './Message.interface';

import CheckBoxIcon from '@material-ui/icons/CheckBox';

const Message: React.FC<Props> = ({ message, selectedMessages, setSelectedMessages }) => {
  const selectMessage = (messageId: string) => {
    const index = selectedMessages.indexOf(messageId);
    const data = [...selectedMessages];
    index === -1 ? data.push(messageId) : data.splice(index, 1);
    setSelectedMessages(data)
  };
  return (
    <div className={
      classNames(
        'single-message-container',
        {'report': message.messageType === REPORT}
      )}
      onClick={() => selectMessage(message._id)}>
      <div className="message-selector-container">
        {selectedMessages.includes(message._id) && <CheckBoxIcon/>}
      </div>
      {message.messageType !== REPORT && <Avatar avatarUrl={message.user.avatar} username={message.user.username}/>}
      <div className="message-details-container">
        <div className="author-container">
          {message.messageType !== REPORT && <span className="author">{message.user.username}</span> }
          <span className="date">{new Date(message.createdAt).toLocaleTimeString('it-IT', {hour: 'numeric', minute: 'numeric'})}</span>
        </div>
        <div className="message-container">
          <p className="message">{message.message}</p>
        </div>
      </div>
    </div>
  )
};

export default Message
