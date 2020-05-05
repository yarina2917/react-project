import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from './App';

import actions from '../redux/auth/actions';

const mapStateToProps = (state: any) => ({
  isReady: state.auth.isReady,
});

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    getUser: actions.getUser
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App)
