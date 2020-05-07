import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ChatHeader from './ChatHeader';

import actions from '../../../redux/modals/actions';

const mapStateToProps = (state: any) => ({
  activeChat: state.chats.activeChat,
  userId: state.auth.user._id,
  isModalOpen: state.modals.isOpen
});

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    openModal: actions.openModal
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ChatHeader)
