import React, { useState, useEffect, useRef } from 'react';

import Avatar from '../../Avatar/Avatar';

import { TextEditorProps as Props } from './TextEditor.inteface';

import socket from '../../../../services/socket';
import store from '../../../../redux/store';

import { Button, TextField } from '@material-ui/core';
import './style.scss';

const TextEditor: React.FC<Props> = ({ activeChat, username }) => {
  const [usersTyping, setUsersTyping] = useState<string[]>([]);
  const [startTyping, setStartTyping] = useState<boolean>(false);
  const [textMessage, setTextMessage] = useState<string>('');

  const typingTimeout: any = useRef();

  useEffect(() => setTextMessage(''), [activeChat._id]);

  useEffect(() => {
    socket.typingMessage((err, data) => {
      if (activeChat._id === data.chatId && !usersTyping.includes(data.username)) {
        setUsersTyping((prevUsersTyping) => [...prevUsersTyping, data.username]);
      }
    });
    socket.stopTyping((err, data) => {
      if (activeChat._id === data.chatId) {
        setUsersTyping((prevUsersTyping) => prevUsersTyping.filter(username => username !== data.username))
      }
    });
    return () => {
      socket.clearSubscribe(['notify-typing', 'notify-stop-typing'])
    }
  }, [activeChat._id, username]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    clearTimeout(typingTimeout);
    if (e.key === 'Enter') {
      sendMessage();
    } else {
      const messageData = {
        username,
        chatId: activeChat._id
      };
      if (!startTyping) {
        socket.sendEvent('typing', messageData);
        setStartTyping(true);
      }
      typingTimeout.current = setTimeout(() => {
        socket.sendEvent('stop-typing', messageData);
        setStartTyping(false);
      }, 3000)
    }
  };

  const sendMessage = () => {
    if (textMessage.trim().length) {
      socket.sendEvent('message', {
        authorId: store.getState().auth.user._id,
        chatId: activeChat._id,
        message: textMessage
      });
      setTextMessage('');
      setStartTyping(false);
      clearTimeout(typingTimeout);
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
      <Button color="primary" className="send-message" onClick={sendMessage}>Send</Button>
    </div>
  )
};

export default TextEditor
