import React from 'react';
import { Link } from 'react-router-dom';
import NavList from './NavList';
import LogoDesktop from '../assets/LogoDesktop';
import LogoMobile from '../assets/LogoMobile';
import CartContainer from '../../Cart/CartContainer';

const MainHeader = () => {
    return (
        <div className="header__main-wrapper">
            <div className="header-main">
                <div className="header-main__logo">
                    <Link className="header-main__logo-link" to="/">
                        <LogoDesktop />
                        <LogoMobile />
                    </Link>
                </div>
                <NavList />
                <div className="header-main__cart">
                    <CartContainer />
                </div>
            </div>
        </div>
    )
};

export default MainHeader;