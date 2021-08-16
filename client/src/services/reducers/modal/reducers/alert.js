import { OPEN_ALERT_MODAL, CLOSE_ALERT_MODAL} from '../../../constants/ActionTypes';

const initialState = {
    isOpen: false,
    message: ""
}

const manageAlertModal = (state = initialState, action) => {
    switch(action.type) {
        case OPEN_ALERT_MODAL: {
            return {
                isOpen: true,
                message: action.message
            }
        }
        case CLOSE_ALERT_MODAL: {
            return {
                isOpen: false,
                message: ""
            }
        }
        default: {
            return state;
        }
    }
}

export default manageAlertModal;

export const alertModalStatus = (state) => state.isOpen;
export const alertModalMessage = (state) => state.message;