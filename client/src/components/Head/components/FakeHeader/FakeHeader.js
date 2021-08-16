import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import UserBox from '../../../UserBox/UserBox';
import Phone from '../../assets/Phone';
import CityPoint from '../../assets/CityPoint';

export default function FakeHeader({ login, openAuthModal, logout }) {

    const hideOnScroll = () => {
        let prevScrollPos = 0;
        let currentScrollPos = window.pageYOffset;
        let el = document.querySelector(".header__fake-wrapper");
        let el2 = document.querySelector(".header__main-wrapper");
        let el3 = document.querySelector(".left-block");

        if (currentScrollPos - prevScrollPos > 1) {
            el.style.height = "0";
            el.style.visibility = "hidden";
            el2.style.top = "0";
            el3.style.top = "70px";
            el3.style.height = "calc(100% - 70px)"
        } else {
            el.style.height = "50px";
            el.style.visibility = "visible";
            el2.style.top = "50px";
            el3.style.top = "120px";
            el3.style.height = "calc(100% - 120px)";
        }
    }

    useEffect(() => {
        if(!window.onscroll) window.onscroll = hideOnScroll;
    }, []);

    return (
        <div className="header__fake-wrapper">
            <div className="header-fake">
                <div className="header-fake__contacts">
                    <span>
                        <Link className="header-fake__contacts-link" to="/contacts">Contacts</Link>
                    </span>
                </div>
                <div className="header-fake__phone-block">
                    <span>
                        <Phone />
                    </span>
                    <a className="header-fake__phone-number" href="tel:+380445566789">
                        044 556 67 89
                    </a>
                </div>
                <div className="header-fake__location-block">
                    <span>
                        <CityPoint />
                    </span>
                    <Link className="header-fake__location-name" to="/contacts">
                        Kyiv
                    </Link>
                </div>  
                <div className="header-fake__sign-in-block">
                    {login ? <UserBox login={login} logout={logout} /> : <button type="button" onClick={openAuthModal}>Sign in</button>}
                </div>
            </div>
        </div>
    )
}