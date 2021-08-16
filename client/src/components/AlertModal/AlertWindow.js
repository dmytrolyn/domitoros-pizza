import React from 'react'
import DeleteIcon from '../CommonAssets/DeleteIcon';

const AlertWindow = ({ reference, message, handleClose }) => {
    return (
        <>
            <div className="modal-head">
                <button className="modal-close" onClick={handleClose}>
                    <DeleteIcon />
                </button>
            </div>
            <div className="modal-body">
                <p className="modal-message">{message}</p>
            </div>
            <div onClick={handleClose} className="modal-footer">
                OK ( <span ref={reference}>3</span> )
            </div>
        </>
    )
}

export default AlertWindow
