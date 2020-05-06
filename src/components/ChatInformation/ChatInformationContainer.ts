import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ChatInformation from './ChatInformation';

import actions from '../../redux/actions';

const mapStateToProps = (state: any) => ({
  isReady: state.modals.isReady
});

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    closeModal: actions.modal.closeModal,
    getChatInformation: actions.chats.getChatInformation
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ChatInformation)
