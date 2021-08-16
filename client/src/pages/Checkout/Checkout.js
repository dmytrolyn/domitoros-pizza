import React from 'react';
import CheckoutList from './components/CheckoutList/CheckoutList';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';
import CheckoutIcon from './assets/CheckoutIcon';

const Checkout = ({ total, items, addItem, subItem, sendOrder }) => {
    return (
        <>
            <div className="checkout-content">
                <div className="cc__col-1-wrapper">
                    <div className="checkout-content__header-wrapper">
                        <CheckoutIcon />
                        <h3 className="checkout-content__header">Checkout order</h3>
                    </div>
                    <CheckoutForm onSubmit={sendOrder} total={total} />
                </div>
                <div className="cc__col-2-wrapper">
                    <div className="cc__col-2">
                        <h3 className="checkout-content__header">Your order</h3>
                        <CheckoutList total={total} items={items} 
                        addItem={addItem} subItem={subItem} removeItem={subItem} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;

