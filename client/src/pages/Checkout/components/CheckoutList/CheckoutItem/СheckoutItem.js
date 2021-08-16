import React from 'react' 
import DeleteIcon from './assets/DeleteIcon'
import { capitalizeWord } from '../../../../../utils/stringManager'

export default function CheckoutItem({ item, count, size, onAddClicked, onSubClicked, onRemoveClicked }) {
    return (
        <>
            <div className="order-card-item">
                <div onClick={onRemoveClicked} className="order-card-item__close">
                    <DeleteIcon />
                </div>
                <div className="order-card-item__content">
                    <div className="order-card-item__img-block">
                        <img src={item.image} alt="item" title=""/>
                    </div>
                    <div className="order-card-item__description">
                        <div className="order-card-item__title">{item.name}</div>
                        <div className="order-card-item__toppings">
                            {item.ingredients && <p>{item.ingredients.map((x) => {
                                return <span key={x} >{x} </span>
                            })}</p>}
                        </div>
                        <span className="order-card-item__size">{capitalizeWord(size)}</span>
                        <div className="order-card-item__footer">
                            <p className="order-card-item__price">{item.price.value * count} <span className="order-card-item__currency">{item.price.currency}</span></p>
                            <div className="quantity-control">
                                <button onClick={onSubClicked} type="button" className="quantity-control__circle-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 491.858 491.858">
                                        <path d="M465.167,211.613H240.21H26.69c-8.424,0-26.69,11.439-26.69,34.316s18.267,34.316,26.69,34.316h213.52h224.959 c8.421,0,26.689-11.439,26.689-34.316S473.59,211.613,465.167,211.613z"></path>
                                    </svg>
                                </button>
                                <span>{count}</span>
                                <button onClick={onAddClicked} type="button" className="quantity-control__circle-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="m23,10h-8.5c-0.3,0-0.5-0.2-0.5-0.5v-8.5c0-0.6-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1v8.5c0,0.3-0.2,0.5-0.5,0.5h-8.5c-0.6,0-1,0.4-1,1v2c0,0.6 0.4,1 1,1h8.5c0.3,0 0.5,0.2 0.5,0.5v8.5c0,0.6 0.4,1 1,1h2c0.6,0 1-0.4 1-1v-8.5c0-0.3 0.2-0.5 0.5-0.5h8.5c0.6,0 1-0.4 1-1v-2c0-0.6-0.4-1-1-1z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}