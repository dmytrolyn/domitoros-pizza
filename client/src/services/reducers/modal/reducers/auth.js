import { OPEN_AUTH_MODAL, CLOSE_AUTH_MODAL } from '../../../constants/ActionTypes';

const initialState = {
    isOpen: false
}

const manageAuthModal = (state = initialState, action) => {
    switch(action.type) {
        case OPEN_AUTH_MODAL: {
            return {
                isOpen: true
            }
        }
        case CLOSE_AUTH_MODAL: {
            return {
                isOpen: false
            }
        }
        default: {
            return state;
        }
    }
}

export default manageAuthModal;

export const authModalStatus = (state) => state.isOpen;