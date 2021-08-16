import React from 'react'
import ProductList from '../../components/ProductList/ProductList'; 

export default function Drinks({ drinks, size }) {
    return (
        <ProductList products={drinks} size={size} />
    )
}