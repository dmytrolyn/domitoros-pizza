import React from 'react' 
import ProductList from '../../components/ProductList/ProductList';
import * as categories from '../../utils/categories';

export default function Pizzas({ scroll, classic, premium, legendary, branded, size }) {
    return (
        <>
            <h2>Classic</h2>
            <ProductList scroll={scroll === categories.CLASSIC} products={classic} size={size} />
            <h2>Premium</h2>
            <ProductList scroll={scroll === categories.PREMIUM} products={premium} size={size} />
            <h2>Legendary</h2>
            <ProductList scroll={scroll === categories.LEGENDARY} products={legendary} size={size} />
            <h2>Branded</h2>
            <ProductList scroll={scroll === categories.BRANDED} products={branded} size={size} />
        </>
    )
}