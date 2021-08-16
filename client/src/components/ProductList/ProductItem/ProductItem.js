import React, { useState, useEffect, useCallback } from 'react';
import ProductImage from './components/ProductImage/ProductImage';
import ProductToppings from './components/ProductToppings/ProductToppings';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductPrice from './components/ProductPrice/ProductPrice';

export default function ProductItem({ item, size, counts, onAddClicked, onRemoveClicked }) {
    const [state, setState] = useState({ price: 0, size: "" });

    useEffect(() => {
        setState({
            price: item.price[size],
            size
        });
    }, [item, size])

    return (
        <>
            <div className="product-block">
                <ProductImage image={item.image} weight={state.price.weight} active={counts[state.size] && counts[state.size] > 0} />
                <div className="product-block__description">
                    <h3 className="product-block__title"><p className="product-block__title-text">{item.name}</p></h3>
                    {item['ingredients'] && <ProductToppings ingredients={item.ingredients} />}
                    <ProductDetails price={item.price} type={state.size} setSize={(size) => {
                        setState({
                            size: size.toLowerCase(), 
                            price: item.price[size],
                        })
                    }} />
                    <ProductPrice priceValue={state.price.value}
                                priceCurrency={state.price.currency}
                                inCart={counts[state.size] && counts[state.size] > 0}
                                count={counts[state.size]}
                                inc={useCallback(() => onAddClicked(state.size), [onAddClicked, state.size])}
                                dec={useCallback(() => onRemoveClicked(state.size), [onRemoveClicked, state.size])}
                    />
                </div>
            </div>
        </>
    )
}