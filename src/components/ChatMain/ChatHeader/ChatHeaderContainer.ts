import { connect } from 'react-redux';

import ChatHeader from './ChatHeader';

const mapStateToProps = (state: any) => ({
  activeChat: state.chats.activeChat
});

export default connect(mapStateToProps)(ChatHeader)
