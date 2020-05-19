import React, {useState} from 'react';

import { Button, TextField } from '@material-ui/core';

import { Props } from './Profile.interface';

const Profile: React.FC<Props> = ({ user, errorMessage, clearUserError, updateUser }) => {
  const [newName, setNewName] = useState<string>(user.username);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const updateUserInfo = () => {
    updateUser({
      userId: user._id,
      data: {username: newName},
      callback: () => setIsEdit(false)
    });
  };

  const cancelUpdate = () => {
    setIsEdit(false);
    setNewName(user.username);
    if (errorMessage) {
      clearUserError();
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      {!isEdit && (
        <div>
          <span>{user.username}</span>
          <Button color="primary" onClick={() => setIsEdit(true)}>Change</Button>
        </div>
      )}
      {isEdit && (
        <div>
          <div className="edit-data">
            <TextField
              id="name"
              label="Username"
              type="text"
              value={newName}
              onChange={e => setNewName(e.target.value)}
            />
            <Button color="primary" onClick={updateUserInfo}>Save</Button>
            <Button color="primary" onClick={cancelUpdate}>Cancel</Button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
       </div>
      )}
    </div>
  );
};

export default Profile
