import actionsType from './constants'

const openModal = (data: any) => ({type: actionsType.OPEN_DIALOG, payload: data});
const closeModal = () => ({type: actionsType.CLOSE_DIALOG});

export default {
  openModal,
  closeModal
}
