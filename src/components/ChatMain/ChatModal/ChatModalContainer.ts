import { connect } from 'react-redux';

import ChatModal from './ChatModal';

const mapStateToProps = (state: any) => ({
  isModalOpen: state.modals.isOpen
});

export default connect(mapStateToProps)(ChatModal)
