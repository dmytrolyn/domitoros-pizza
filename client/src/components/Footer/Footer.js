import React from 'react';
import Services from './components/Services'; 
import Contacts from './components/Contacts';
import FollowUs from './components/FollowUs';

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer__list">
                <li className="footer__item">
                    <h3 className="footer__item-title">Services</h3>
                    <Services />
                </li>
                <li className="footer__item">
                    <h3 className="footer__item-title">Contacts</h3>
                    <Contacts />
                </li>
                <li className="footer__item">
                    <h3 className="footer__item-title">Follow us</h3>
                    <FollowUs />
                </li>
            </ul>
        </footer>
    )
};

export default Footer;