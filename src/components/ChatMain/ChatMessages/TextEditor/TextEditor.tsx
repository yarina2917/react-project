import React, { useState } from 'react';

import Avatar from '../../Avatar/Avatar';

import { TextEditorProps as Props, IUsersTyping } from './TextEditor.inteface';

import socketService from '../../../../services/socket';
import store from '../../../../redux/store';

import { Button, TextField } from '@material-ui/core';
import './style.scss';

const TextEditor: React.FC<Props> = ({ activeChat }) => {
  const [usersTyping, setUsersTyping] = useState<IUsersTyping[]>([]);
  const [textMessage, setTextMessage] = useState<string>('');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (textMessage.trim().length) {
      socketService.getSocket().emit('message', {
        authorId: store.getState().auth.user._id,
        chatId: activeChat._id,
        message: textMessage
      });
      setTextMessage('');
    }
  };

  return (
    <div className="editor-container">
      { usersTyping.length === 1 && <p className="typing">{usersTyping[0]} is typing...</p> }
      { usersTyping.length > 1 && <p className="typing">{usersTyping.length} persons are typing...</p> }
      <div className="editor-input-container">
        <div className="img-container">
          <Avatar avatarUrl={activeChat.avatar?.url} username={activeChat.chatName}/>
        </div>
        <TextField
          id="filled-basic"
          variant="filled"
          label="Message"
          type="text"
          value={textMessage}
          onChange={e => setTextMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="img-container">
          <Avatar avatarUrl={activeChat.avatar?.url} username={activeChat.chatName}/>
        </div>
      </div>
      <Button color="primary" className="send-message" onClick={() => sendMessage()}>Send</Button>
    </div>
  )
};

export default TextEditor
