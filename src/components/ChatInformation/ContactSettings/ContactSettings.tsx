import React from 'react';

import { ChatSettingsData as Props } from '../ChatInformations.interface';

import ReorderIcon from '@material-ui/icons/Reorder';

const ContactSettings: React.FC<Props> = ({ data }) => {
  return (
    <div className="contact-info">
      <ReorderIcon/>
      <span className="link">Delete contact</span>
    </div>
  )
};

export default ContactSettings
