import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from './Message';

import actions from '../../../../../redux/chats/actions';

const mapStateToProps = (state: any) => ({
  selectedMessages: state.chats.selectedMessages
});

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    setSelectedMessages: actions.setSelectedMessages
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Message)
