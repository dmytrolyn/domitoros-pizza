import React from 'react'
import { Link } from 'react-router-dom';
import { capitalizeWord } from '../../../utils/stringManager';

export default function SubList({ type, sizes }) {
    return (
        <ul className="left-block__menu-sub-list">
            {sizes.map(x => {
                return <li key={x} className="left-block__menu-sub-item">
                    <Link className="left-block__menu-sub-link" to={{ pathname: `/${type.toLowerCase()}`, state: { size: x.toLowerCase() }}}>
                        {capitalizeWord(x)}
                    </Link>
                </li>
            })}
        </ul>
    )
}