import React from 'react';
import Visa from '../assets/Visa';
import MasterCard from '../assets/MasterCard';

const Contacts = () => {
    return (
        <ul className="footer__sub-list">
            <li className="footer__sub-list-item">
                <a className="footer__sub-list-link" href="https://vk.com">
                    someMail@service.com
                </a>
            </li>
            <li className="footer__sub-list-item">
                <a className="footer__sub-list-link" href="https://vk.com">
                    Send complaint
                </a>
            </li>
            <li className="footer__sub-list-item">
                <a className="footer__sub-list-link" href="tel:+380445566789">
                    044 556 67 89
                </a>
            </li>
            <li className="footer__sub-list-item">
                SUPPORTED PAYMENTS
                <div className="footer__payments">
                    <Visa />
                    <MasterCard />
                </div>
            </li>
        </ul>
    )
}

export default Contacts;