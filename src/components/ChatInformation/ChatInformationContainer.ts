import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ChatInformation from './ChatInformation';

import modalActions from '../../redux/modals/actions';
import chatActions from '../../redux/chats/actions';

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    closeModal: modalActions.closeModal,
    getChatInformation: chatActions.getChatInformation
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(ChatInformation)
