import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ChatMessages from './ChatMessages';

import actions from '../../../redux/chats/actions';

const mapStateToProps = (state: any) => ({
  activeChat: state.chats.activeChat,
  selectedMessages: state.chats.selectedMessages,
  modalOpen: state.modals.isOpen,
  modalData: state.modals.modalProps
});

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    setSelectedMessage: actions.setSelectedMessages
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessages)
