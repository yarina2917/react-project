import React from 'react';

import { Props } from './Avatar.interface';

import './style.scss';

const Avatar: React.FC<Props> = ({ avatarUrl, username }) => {
  return (
    <>
      {avatarUrl && <img src={avatarUrl} alt="avatar"/>}
      {!avatarUrl &&
        <div className="avatar">
          <span>{username[0]}</span>
        </div>
      }
    </>
  )
};

export default Avatar
