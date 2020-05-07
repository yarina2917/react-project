import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ChatsListsManage from './ChatsListsManage';

import actions from '../../../redux/actions';

const mapStateToProps = (state: any) => ({
  chatLists: state.chats.chatLists,
  userId: state.auth.user._id
});

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    getChats: actions.chats.getChats,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ChatsListsManage)
