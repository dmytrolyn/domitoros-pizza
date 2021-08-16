import React from 'react';
import AuthForm from './components/AuthForm';
import RegisterForm from './components/RegisterForm';
import DeleteIcon from '../CommonAssets/DeleteIcon';

const AuthWindow = ({ handleClose, handleAuth, handleRegister, showAuth, setAuth, setRegister }) => {
    return (
        <>
            <div className="modal-head">
                <button className="modal-close" onClick={handleClose}>
                    <DeleteIcon />
                </button>
            </div>
            <div className="modal-body">
                {showAuth ? <AuthForm swapState={setRegister} onSubmit={handleAuth} /> : 
                <RegisterForm swapState={setAuth} onSubmit={handleRegister} />}
            </div>
        </>
    )
}

export default AuthWindow
