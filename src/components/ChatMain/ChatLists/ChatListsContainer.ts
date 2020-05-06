import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ChatLists from './ChatLists';

import actions from '../../../redux/actions';

const mapStateToProps = (state: any) => ({
  errorMessage: state.chats.errorMessage,
  chatLists: state.chats.chatLists,
  activeChatId: state.chats.activeChat._id,
  userId: state.auth.user._id
});

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    getChats: actions.chats.getChats,
    selectChat: actions.chats.selectChat,
    updateChats: actions.chats.updateChats,
    closeModal: actions.modal.closeModal
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ChatLists)
