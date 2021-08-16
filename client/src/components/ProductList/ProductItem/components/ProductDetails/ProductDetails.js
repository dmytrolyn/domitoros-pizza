import React from 'react';
import { capitalizeWord } from '../../../../../utils/stringManager';
import cn from 'classnames';

const ProductDetailsButton = ({ active, value, setSize }) => (
    <button onClick={() => setSize(value)} className={cn("product-block__size-button", active && 
    "product-block__size-button_active")} type="button">
        {capitalizeWord(value)}
    </button>
)

const ProductDetails = React.memo(({ price, type, setSize }) => {
    return (
        <div className="product-block__details">
            {Object.keys(price).map(x => 
                <ProductDetailsButton active={type === x} key={x} value={x} setSize={setSize} />
            )}
        </div>
    )
})

export default ProductDetails;