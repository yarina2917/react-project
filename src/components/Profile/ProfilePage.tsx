import React, {useState} from 'react';
import { bindActionCreators } from "redux";
import { connect, useDispatch } from "react-redux";

import { Button, TextField } from "@material-ui/core";

import actionsTypes from '../../redux/auth/constants';
import { clearUserError } from '../../redux/auth/actions';

interface Props {
  user: any
  errorMessage: string,
  clearUserError: () => void
}

const Profile: React.FC<Props> = ({user, errorMessage, clearUserError}) => {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState<string>(user.username);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const update = () => {
    dispatch({type: actionsTypes.UPDATE_USER, payload: {userId: user._id, data: {username: newName}}})
  };

  const cancel = () => {
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
            <Button color="primary" onClick={() => update()}>Save</Button>
            <Button color="primary" onClick={() => cancel()}>Cancel</Button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
       </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.auth.user,
  errorMessage: state.auth.errorMessage
});

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({ clearUserError }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
