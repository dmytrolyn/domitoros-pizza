import React from 'react';
import Increment from './assets/Increment';
import Decrement from './assets/Decrement';

const ProductPrice = React.memo(({ priceValue, priceCurrency, inCart, count, inc, dec }) => (
    <div className="product-block__price">
        <div className="product-block__price-block">
            <span className="product-block__price-value">{priceValue}</span>
            <span className="product-block__price-currency">{priceCurrency}</span>
        </div>
        <div className="product-block__cart-btn-wrap">
            {inCart ? 
            <div className="product-block__quantity">
                <button onClick={dec} type="button" className="product-block__quantity-control">
                    <Decrement />
                </button>
                <p className="product-block__quantity-count">{count}</p>
                <button onClick={inc} type="button" className="product-block__quantity-control">
                    <Increment />
                </button>
                </div> : <button onClick={inc} className="product-block__cart-btn" type="button">To cart</button>}
        </div>
    </div>
))

export default ProductPrice;