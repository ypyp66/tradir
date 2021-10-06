const OPEN_MODAL = "open_modal";
const CLOSE_MODAL = "close_modal";
const TOGGLE_MODAL = "toggle_modal";

export const openModal = () => ({ type: OPEN_MODAL });
export const closeModal = () => ({ type: CLOSE_MODAL });
export const toggleModal = () => ({ type: TOGGLE_MODAL });

const initialState = {
  isOpen: false,
};

function modals(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { isOpen: !state.isOpen };
    default:
      return state;
  }
}

export default modals;
