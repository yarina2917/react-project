import React from 'react';
import { useDispatch } from 'react-redux';

import ChatSettings from '../ChatSettings/ChatSettings';

import socket from '../../../services/socket';

import actions from '../../../redux/chats/actions';

import InfoIcon from '@material-ui/icons/Info';
import ReorderIcon from '@material-ui/icons/Reorder';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

import { ChatSettingsData as Props } from '../ChatInformations.interface';

const ChanelSettings: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  const leaveChannel = () => {
    socket.sendEvent('remove-members', {chatId: data.chatId, userId: data.userId})
  };
  const deleteChannel = () => dispatch(actions.deleteChannel());
  return (
    <div className="channel-settings">
      <div className="channel-description">
        <InfoIcon/>
        <p>{data.channelDescription || 'Description about channel'}</p>
      </div>
      {!data.editChat && (
        <div className="channel-actions">
          <ReorderIcon/>
          <span className="link" onClick={() => leaveChannel()}>Leave channel</span>
        </div>
      )}
      {data.editChat && (
        <div className="channel-actions">
          <RemoveCircleIcon/>
          <span className="link" onClick={() => deleteChannel()}>Delete channel</span>
        </div>
      )}
      {data.editChat && <ChatSettings data={data}/>}
    </div>
  )
};

export default ChanelSettings
