import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ChatLists from './ChatLists';

import actions from '../../../redux/chats/actions';

const mapStateToProps = (state: any) => ({
  errorMessage: state.chats.errorMessage,
  chatLists: state.chats.chatLists,
  activeChatId: state.chats.activeChat._id
});

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    getChats: actions.getChats,
    selectChat: actions.selectChat
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ChatLists)
