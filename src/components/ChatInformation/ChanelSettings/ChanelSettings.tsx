import React from 'react';

import ChatSettings from '../ChatSettings/ChatSettings';

import InfoIcon from '@material-ui/icons/Info';
import ReorderIcon from '@material-ui/icons/Reorder';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

import { ChatSettingsData as Props } from '../ChatInformations.interface';

const ChanelSettings: React.FC<Props> = ({ data }) => {
  return (
    <div className="channel-settings">
      <div className="channel-description">
        <InfoIcon/>
        <p>{data.channelDescription || 'Description about channel'}</p>
      </div>
      {!data.editChat && (
        <div className="channel-actions">
          <ReorderIcon/>
          <span className="link">Leave channel</span>
        </div>
      )}
      {data.editChat && (
        <div className="channel-actions">
          <RemoveCircleIcon/>
          <span className="link">Delete channel</span>
        </div>
      )}
      {data.editChat && <ChatSettings data={data}/>}
    </div>
  )
};

export default ChanelSettings
