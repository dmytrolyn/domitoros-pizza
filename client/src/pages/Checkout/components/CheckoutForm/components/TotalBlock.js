import React from 'react';

function TotalBlock({ total , submitting }) {
    return (
        <div className="checkout-form__total-block">
            <p className="checkout-form__total-title">Total</p>
            <div className="checkout-form__total-price">
                {total} uah
            </div>
            <button disabled={submitting} type="submit" className="checkout-form__order-button">Checkout</button>
        </div>
    )
}

export default TotalBlock
