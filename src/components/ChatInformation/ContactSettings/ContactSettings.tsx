import React from 'react';
import { useDispatch } from 'react-redux';

import actions from '../../../redux/chats/actions';

import { ChatSettingsData as Props } from '../ChatInformations.interface';

import ReorderIcon from '@material-ui/icons/Reorder';

const ContactSettings: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  const deleteContact = () => dispatch(actions.deleteContact(data.chatId));
  return (
    <div className="contact-info">
      <ReorderIcon/>
      <span className="link" onClick={deleteContact}>Delete contact</span>
    </div>
  )
};

export default ContactSettings
