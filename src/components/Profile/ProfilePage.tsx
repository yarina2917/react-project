import React, {useState} from 'react';
import { connect, useDispatch } from "react-redux";

import { Button, TextField } from "@material-ui/core";

import authActions from '../../redux/auth/constants'

interface Props {
  user: any
  errorMessage: string
}

const Profile: React.FC<Props> = ({user, errorMessage}) => {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState<string>(user.username);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const update = () => {
    dispatch({type: authActions.UPDATE_USER, payload: {userId: user._id, data: {username: newName}}})
  };

  const cancel = () => {
    setIsEdit(false);
    setNewName(user.username);
    dispatch({type: authActions.CLEAR_USER_ERROR});
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
            <Button color="primary" onClick={() => update()}>Save</Button>
            <Button color="primary" onClick={() => cancel()}>Cancel</Button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
       </div>
      )}
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    user: state.auth.user,
    errorMessage: state.auth.errorMessage
  }
}

export default connect(mapStateToProps)(Profile)
