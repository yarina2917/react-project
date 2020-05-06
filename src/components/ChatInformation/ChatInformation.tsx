import React, { useEffect } from 'react';

import ModalHeader from './ModalHeader/ModalHeader';
import ChatSettings from './ChanelSettings/ChanelSettings';
import ChanelSettings from './ChanelSettings/ChanelSettings';
import ProfileSettings from './ProfileSettings/ProfileSettings';
import ContactSettings from './ContactSettings/ContactSettings';

import { ChatInformationProps as Props } from './ChatInformations.interface';

import { CHANNEL, GROUP, DIALOG, PROFILE } from '../../constants/chatTypes';

import './styles.scss';
import Dialog from "@material-ui/core/Dialog/Dialog";

const ChatInformation: React.FC<Props> = ({ data, modalOpen, closeModal, getChatInformation }) => {
  useEffect(() => {
    getChatInformation({chatType: data.type, chatId: data.chatId})
  }, [modalOpen]);
  return (
    <Dialog open={modalOpen} onClose={() => closeModal()} aria-labelledby="form-dialog-title" fullWidth={true} maxWidth={"xs"}>
      <div>
        <ModalHeader/>
        { data.type === PROFILE && <ProfileSettings data={data}/> }
        { data.type === DIALOG && <ContactSettings data={data}/> }
        { data.type === GROUP && <ChatSettings data={data}/> }
        { data.type === CHANNEL && <ChanelSettings data={data}/> }
      </div>
    </Dialog>
  )
};

export default ChatInformation
