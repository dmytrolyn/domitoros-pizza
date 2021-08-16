import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import AlertWindow from './AlertWindow';
import { closeAlertModal } from '../../services/actions';
import { alertModalStatus, alertModalMessage } from '../../services/reducers';

const AlertModal = ({ isOpen, message, closeAlertModal }) => {
    let ref = React.useRef();
    let timer = null;

    const setCloseInterval = () => {
        ref.current.innerText = "3";
        timer = setInterval(() => {
            ref.current.innerText = parseInt(ref.current.innerText) - 1;
            if(ref.current.innerText === "0") {
                handleClose();
            } 
        }, 1000)
    }

    const handleClose = () => {
        clearInterval(timer);
        closeAlertModal();
    }

    return (
        <Modal isOpen={isOpen}
        onAfterOpen={setCloseInterval}
        onRequestClose={handleClose}
        className="modal"
        overlayClassName="overlay modal-overlay">
            <AlertWindow reference={ref} message={message} handleClose={handleClose} />
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    isOpen: alertModalStatus(state),
    message: alertModalMessage(state)
})

export default connect(mapStateToProps, { closeAlertModal })(AlertModal);