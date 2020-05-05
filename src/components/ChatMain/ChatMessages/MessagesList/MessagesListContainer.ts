import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MessagesList from './MessagesList';

import actions from '../../../../redux/chats/actions';

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    updateChatMessage: actions.updateChatMessage
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(MessagesList)
