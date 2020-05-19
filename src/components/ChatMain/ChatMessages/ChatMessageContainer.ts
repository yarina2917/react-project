import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ChatMessages from './ChatMessages';

import actions from '../../../redux/chats/actions';

const mapStateToProps = (state: any) => ({
  activeChat: state.chats.activeChat,
  selectedMessages: state.chats.selectedMessages,
  username: state.auth.user.username,
  userId: state.auth.user._id
});

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    setSelectedMessage: actions.setSelectedMessages
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessages)
