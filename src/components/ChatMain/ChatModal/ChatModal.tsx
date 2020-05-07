import React from 'react';

import ChatInformation from '../../ChatInformation/ChatInformationContainer';

import { chatModalProps as Props } from '../ChatMain.interface';

const ChatModal: React.FC<Props> = ({ isModalOpen }) => {
  return (
    <>
      {isModalOpen && <ChatInformation isModalOpen={isModalOpen}/>}
    </>
  )
};

export default ChatModal
