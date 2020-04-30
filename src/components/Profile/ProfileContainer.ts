import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Profile from './ProfilePage';

import actions from '../../redux/auth/actions';

const mapStateToProps = (state: any) => ({
  user: state.auth.user,
  errorMessage: state.auth.errorMessage
});

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    clearUserError: actions.clearUserError,
    updateUser: actions.updateUser
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
