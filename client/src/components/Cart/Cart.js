import React from 'react'
import CartIcon from './assets/CartIcon';
import { Link } from 'react-router-dom';

export default function Cart({ total, count }) {
    return (
        <div className="cart-item">
            <div className="cart-wrapper">
                <div className="button-cart">
                    <div className="button-cart__icon-wrap">
                        <div className="button-cart__info-quantity">{count}</div>
                        <CartIcon />
                    </div>
                    <div className="button-cart__info-price" style={count !== 0 ? {display: "flex"} : {display: "none"}}><p>{total + ' uah'}</p></div>
                    <Link to="/checkout"><button type="button" className="button-cart__order-button" disabled={count === 0}>Checkout</button></Link>
                </div>
            </div>
        </div>
    )
}
