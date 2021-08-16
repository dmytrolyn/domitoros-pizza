import React from 'react';
import { Link } from 'react-router-dom';
import * as categories from '../../../utils/categories';

export default function SubNavList() {
    return (
        <ul className="header-main__navigation-sub-menu">
            <li className="header-main__navigation-sub-item">
                <Link className="header-main__navigation-sub-link" to={{ pathname: '/pizzas', state: { category: categories.CLASSIC }}}>
                    Classic
                </Link>
            </li>
            <li className="header-main__navigation-sub-item">
                <Link className="header-main__navigation-sub-link" to={{ pathname: '/pizzas', state: { category: categories.PREMIUM }}}>
                    Premium
                </Link>
            </li>
            <li className="header-main__navigation-sub-item">
                <Link className="header-main__navigation-sub-link" to={{ pathname: '/pizzas', state: { category: categories.LEGENDARY }}}>
                    Legendary
                </Link>  
            </li>
            <li className="header-main__navigation-sub-item">
                <Link className="header-main__navigation-sub-link" to={{ pathname: '/pizzas', state: { category: categories.BRANDED }}}>
                    Branded
                </Link>
            </li>
        </ul>
    )
}