import React from 'react';
import { useDispatch } from 'react-redux';

import Avatar from '../../ChatMain/Avatar/Avatar';

import actions from '../../../redux/modals/actions'

import { ChatSettingsData as Props } from '../ChatInformations.interface';

import './style.scss';

const ModalHeader: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div className="modal-header-container">
      <div className="modal-header-actions">
        <span>Settings</span>
        <div className="modal-actions">
          {data.editChat && <span>Edit</span>}
          <span onClick={() => dispatch(actions.closeModal())}>Close</span>
        </div>
      </div>
      <div className="modal-header-data">
        <Avatar avatarUrl={data.chatImage} username={data.chatName}/>
        <div className="modal-header-name">
          <span>{data.chatName}</span>
        </div>
      </div>
    </div>
  )
};

export default ModalHeader
