import React from 'react'; 
import ProductsList from '../../components/ProductList/ProductList';
import Slider from '../../components/Slider/SliderComponent';

export default function Index({ products, size }) {
    return (
        <>
            <Slider />
            <div className="recent">
                <h2 className="product-title">Popular pizza</h2>
                <ProductsList products={products} size={size} />
            </div>
        </>
    )
}