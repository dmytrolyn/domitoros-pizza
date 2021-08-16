import React from 'react'
import { create } from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom';

import Cart from './Cart'

describe('Cart', () => {
    const filledProps = {
        total: 350,
        count: 2
    }
    const emptyProps = {
        total: 0,
        count: 0
    }

    const cartComponent = (props) => (
        <Router>
            <Cart {...props} />
        </Router>
    )
    const filledCart = create(cartComponent(filledProps));
    let instance1 = filledCart.root;

    const emptyCart = create(cartComponent(emptyProps));
    let instance2 = emptyCart.root;

    test('should be rendered with passed total value', () => {
        let p = instance1.findByType("p");
        expect(p.children[0]).toEqual(`${filledProps.total} uah`);
    })

    test('should be rendered with passed total count', () => {
        let totalDiv = instance1.findByProps({ className: "button-cart__info-quantity" });
        expect(+totalDiv.children[0]).toBe(filledProps.count);
    })

    test('should be rendered with disabled checkout button when total count equal to zero', () => {
        let checkoutBtn = instance2.findByType("button");
        expect(checkoutBtn.props).toHaveProperty("disabled");
    })
    
    test('should be rendered with invisible total price block when total count equal to zero', () => {
        let totalLabel = instance2.findByProps({ className: "button-cart__info-price" });
        expect(totalLabel.props.style.display).toBe("none");
    })
})

