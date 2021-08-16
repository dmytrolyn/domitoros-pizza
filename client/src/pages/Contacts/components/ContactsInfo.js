import React from 'react';
import Facebook from '../assets/Facebook';
import Twitter from '../assets/Twitter';
import Telegram from '../assets/Telegram';

const ContactsInfo = () => (
    <div className="contacts__info">
        <ul className="contacts__info-list">
            <li><img src="https://img.icons8.com/carbon-copy/100/000000/restaurant.png" alt="restaurant"/>Address: Kiev , pr. Kovalskiy 14/531</li>
            <li><img src="https://img.icons8.com/wired/64/000000/phone.png" alt="hotline" /> (044) 556 67 89</li>
            <li><img src="https://mafia.ua/img/t097.png" alt="kyivstar"/> (097) 564 56 78</li>
            <li><img src="https://mafia.ua/img/t099.png" alt="vodafone"/> (099) 435 12 11</li>
            <li><img src="https://mafia.ua/img/t093.png" alt="lifecell"/> (093) 112 44 55</li>
        </ul>
        <div className="contacts__info-share">
            <h3>Share us!</h3>
            <ul className="contacts__info-share-list">
                <li className="contacts__info-share-item">
                    <a data-social="facebook" href="/q" className="contacts__info-share-link">
                        <Facebook />
                    </a>
                </li>
                <li className="contacts__info-share-item">
                    <a data-social="twitter" href="/q" className="contacts__info-share-link">
                        <Twitter />
                    </a>
                </li>
                <li className="contacts__info-share-item">
                    <a data-social="telegram" href="/q" className="contacts__info-share-link">
                        <Telegram />
                    </a>
                </li>
            </ul>
        </div>
    </div>
)

export default ContactsInfo;