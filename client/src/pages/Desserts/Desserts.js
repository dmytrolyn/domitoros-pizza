import React from 'react'
import ProductList from '../../components/ProductList/ProductList';  

export default function Desserts({ desserts, size }) {
    return (
        <ProductList products={desserts} size={size} />
    )
}