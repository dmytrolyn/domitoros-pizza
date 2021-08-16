import React from 'react';
import InCart from './assets/InCart';
import cn from 'classnames';

const ProductImage = React.memo(({ image, weight, active }) => (
    <div className="product-block__image">
        <img src={image} alt="item" />
        <div className="product-block__weight">
            {weight}
        </div>
        <div className={cn("product-block__bag-status-icons", active && "active")}>
            <div className="product-block__bag-status-icons-cart">
                <InCart />
            </div>
        </div>
    </div>
))

export default ProductImage;