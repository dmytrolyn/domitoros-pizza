import React from 'react';
import { Link } from 'react-router-dom'
import NavSubList from './NavSubList';

export default function NavList() {
    return (
        <nav className="header-main__navigation">
            <ul className="header-main__navigation-list">
                <li className="header-main__navigation-item">
                    <Link className="header-main__navigation-link" to="/pizzas">
                        <p>Pizza</p>
                    </Link>
                    <NavSubList />
                </li>
                <li className="header-main__navigation-item">
                    <Link className="header-main__navigation-link" to="/drinks">
                        <p>Drinks</p>
                    </Link>
                </li>
                <li className="header-main__navigation-item">
                    <Link className="header-main__navigation-link" to="/desserts">
                        <p>Desserts</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}