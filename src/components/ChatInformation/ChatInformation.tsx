import React, { useEffect } from 'react';

import ModalHeader from './ModalHeader/ModalHeader';
import ChatSettings from './ChatSettings/ChatSettings';
import ChanelSettings from './ChanelSettings/ChanelSettings';
import ProfileSettings from './ProfileSettings/ProfileSettings';
import ContactSettings from './ContactSettings/ContactSettings';

import { ChatInformationProps as Props } from './ChatInformations.interface';

import { CHANNEL, GROUP, DIALOG, PROFILE } from '../../constants/chatTypes';

import Dialog from '@material-ui/core/Dialog/Dialog';
import './styles.scss';

const ChatInformation: React.FC<Props> = ({ data, modalOpen, closeModal, getChatInformation, isReady }) => {
  useEffect(() => {
    getChatInformation({chatType: data.type, chatId: data.chatId})
  }, [modalOpen]);
  return (
    <>
      {isReady && (
        <Dialog open={modalOpen} onClose={() => closeModal()} aria-labelledby="form-dialog-title" fullWidth={true} maxWidth={"xs"}>
          <div>
            <ModalHeader data={data}/>
            { data.type === PROFILE && <ProfileSettings/> }
            { data.type === DIALOG && <ContactSettings data={data}/> }
            { data.type === GROUP && <ChatSettings data={data}/> }
            { data.type === CHANNEL && <ChanelSettings data={data}/> }
          </div>
        </Dialog>
      )}
    </>
  )
};

export default ChatInformation
