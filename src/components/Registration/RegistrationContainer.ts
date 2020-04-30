import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Registration from './Registration';

import actions from '../../redux/auth/actions';

const mapStateToProps = (state: any) => ({
  errorMessage: state.auth.errorMessage
});

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({ createUser: actions.createUser }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
