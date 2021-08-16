import React, { useState } from 'react';
import Modal from 'react-modal';
import AuthWindow from './AuthWindow';
import { connect } from 'react-redux';
import { closeAuthModal, initLogin, initRegister } from '../../services/actions';
import { authModalStatus } from '../../services/reducers';

const AuthModalContainer = ({ isOpen, closeAuthModal, initLogin, initRegister }) => {
    const handleAuth = (values) => {
        let { login, password } = values;
        initLogin({ login, password });
    }

    const handleRegister = (values) => {
        let { login, password, password2 } = values;
        initRegister({ login, password, password2 });
    }

    const [state, setState] = useState({ showAuth: true });

    const handleClose = () => {
        setState({ showAuth: true });
        closeAuthModal();
    }

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={handleClose}
            className="modal"
            overlayClassName="overlay modal-overlay"
            
        >
            <AuthWindow handleClose={handleClose}
                        handleAuth={handleAuth}
                        handleRegister={handleRegister}
                        showAuth={state.showAuth}
                        setAuth={() => setState({ showAuth: true })} 
                        setRegister={() => setState({ showAuth: false })}
            />
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    isOpen: authModalStatus(state)
})

export default connect(mapStateToProps, { closeAuthModal, initLogin, initRegister })(AuthModalContainer);