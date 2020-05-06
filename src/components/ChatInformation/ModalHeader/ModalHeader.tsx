import React from 'react';

import Avatar from '../../ChatMain/Avatar/Avatar';

import './style.scss';

const ModalHeader = () => {
  return (
    <div className="profile-header-container">
      <div className="profile-header-info-container">
        <div className="profile-name-container">
          <span className="profile-username">{}</span>
        </div>
      </div>
    </div>
  )
};

export default ModalHeader
