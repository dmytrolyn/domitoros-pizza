import React from 'react';
import Facebook from '../assets/Facebook';
import Youtube from '../assets/Youtube';
import Instagram from '../assets/Instagram';
import Telegram from '../assets/Telegram';

const FollowUs = () => {
    return (
        <ul className="footer__sub-list">
            <li className="footer__sub-list-item">
                <a className="footer__sub-list-link" href="https://vk.com">
                    <Facebook />
                    <span>Facebook</span>
                </a>
            </li>
            <li className="footer__sub-list-item">
                <a className="footer__sub-list-link" href="https://vk.com">
                    <Youtube />
                    <span>Youtube</span>
                </a>
            </li>
            <li className="footer__sub-list-item">
                <a className="footer__sub-list-link" href="https://vk.com">
                    <Instagram />
                    <span>Instagram</span>
                </a>
            </li>
            <li className="footer__sub-list-item">
                <a className="footer__sub-list-link" href="https://vk.com">
                    <Telegram />
                    <span>Telegram</span>
                </a>
            </li>
        </ul>
     )
}

export default FollowUs;