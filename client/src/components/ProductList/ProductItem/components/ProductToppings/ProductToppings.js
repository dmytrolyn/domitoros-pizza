import React from 'react';

const ProductToppings = React.memo(({ ingredients }) => (
    <div className="product-block__toppings">
        <span>{ingredients.map((x, index) => 
            index !== ingredients.length - 1 ? x + ', ' : x
        )}</span>
    </div>
))

export default ProductToppings;