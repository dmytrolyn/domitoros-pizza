import React from 'react';
import ProductPrice from './ProductPrice';
import { create } from 'react-test-renderer';

describe('ProductPrice', () => {
    let emptyProps = {
        priceValue: 145,
        priceCurrency: "uah",
        inCart: false,
        count: 0
    }
    let chosenProps = {
        priceValue: 145,
        priceCurrency: "uah",
        inCart: true,
        count: 1
    }
    let priceBlock = (props) => <ProductPrice {...props} />;

    let emptyPriceBlock = create(priceBlock(emptyProps));
    let emptyInstance = emptyPriceBlock.root;

    let chosenPriceBlock = create(priceBlock(chosenProps));
    let chosenInstance = chosenPriceBlock.root;

    it("should be rendered with passed price value", () => {
        let priceValBlock = emptyInstance.findByProps({ className: "product-block__price-value" });
        expect(priceValBlock.props.children).toBe(emptyProps.priceValue);
    })

    it("should be rendered with passed price currency", () => {
        let priceValBlock = emptyInstance.findByProps({ className: "product-block__price-currency" });
        expect(priceValBlock.props.children).toBe(emptyProps.priceCurrency);
    })

    it("should be rendered with default cart button when item is not in cart", () => {
        let cartBtn = emptyInstance.findByProps({ className: "product-block__cart-btn" });
        expect(cartBtn).not.toBeNull();
    })

    it("should be rendered with edit buttons when item is in cart", () => {
        let cartButtons = chosenInstance.findAllByProps({ className: "product-block__quantity-control" });
        expect(cartButtons.length).toBe(2);
    })

    it("should be rendered with passed count number when item is in cart", () => {
        let countLabel = chosenInstance.findByType("p");
        expect(countLabel.props.children).toBe(chosenProps.count)
    })
})
