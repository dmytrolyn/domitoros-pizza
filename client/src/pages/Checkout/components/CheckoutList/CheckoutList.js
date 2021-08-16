import React from 'react';
import CheckoutItem from './CheckoutItem/СheckoutItem';

export default function CheckoutList({ total, items, addItem, subItem, removeItem }) {
    return (
        <div className="cc-order">
            <div className="cc-order__body">
                {items.map((x) => {
                    return <CheckoutItem 
                        key={`${x.item._id}:${x.size}`} 
                        item={x.item} 
                        count={x.count} 
                        size={x.size} 
                        onAddClicked={() => addItem(x.item, x.size)}
                        onSubClicked={() => subItem(x.item._id, x.size)}
                        onRemoveClicked={() => removeItem(x.item._id, x.size, true)}
                    />
                })}
            </div>
            <div className="cc-order__footer">
                <div className="cc-order__footer-content">
                    <span className="cc-order__footer-content-sum">Total price: {total} uah</span>
                </div>
            </div>
        </div>
    )
}