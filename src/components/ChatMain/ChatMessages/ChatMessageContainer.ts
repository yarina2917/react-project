import { connect } from 'react-redux';

import ChatMessages from './ChatMessages';

const mapStateToProps = (state: any) => ({
  activeChat: state.chats.activeChat
});

export default connect(mapStateToProps)(ChatMessages)
