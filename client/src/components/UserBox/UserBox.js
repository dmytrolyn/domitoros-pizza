import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavArrow from './assets/NavArrow';
import cn from 'classnames';

const UserBox = ({ login, logout }) => {
    const [state, setState] = useState({ isOpened: false })

    return (
        <div onClick={() => setState({ isOpened: !state.isOpened })} className="userBox">
            <div className="userBox__name">{login}</div>
            <div className={cn("userBox__arrow", state.isOpened && "userBox__arrow_active")}>
                <NavArrow />
            </div>
            <div className={cn("userBox__nav", state.isOpened && "userBox__nav_active")}>
                <Link className="userBox__nav-item" to="/profile">Profile</Link>
                <Link className="userBox__nav-item" to="/history">History</Link>
                <div onClick={logout} className="userBox__nav-item">Log out</div>
            </div>
        </div>
    )
}

export default UserBox;