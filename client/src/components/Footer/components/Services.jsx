import React from 'react';
import Service from '../assets/Service'; 

const Services = () => {
    return (
        <ul className="footer__sub-list">
            <li className="footer__sub-list-item">
                <a className="footer__sub-list-link" href="https://vk.com">
                    <Service />
                    <span>Pizza tracker</span>
                </a>
            </li>
        </ul>
    )
}

export default Services;