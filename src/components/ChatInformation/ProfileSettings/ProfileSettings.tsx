import React from 'react';
import { useDispatch } from 'react-redux';

import actions from '../../../redux/auth/actions';

import { Button } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const ProfileSettings = () => {
  const dispatch = useDispatch();
  const logoutUser = () => dispatch(actions.logoutUser());
  return (
    <div className="profile-info-container">
      <Button color="primary" onClick={logoutUser}>
        <ExitToAppIcon/>
        <span>Log out</span>
      </Button>
    </div>
  )
};

export default ProfileSettings
