import React from 'react';
import ProductImage from './ProductImage';
import { create } from 'react-test-renderer';

describe('Product image', () => {
    const freeProps = {
        image: "https://fake_link",
        weight: "300g",
        active: false
    }

    const chosenProps = {
        image: "https://fake_link",
        weight: "300g",
        active: true
    }

    let imgComponent = (props) => {
        return <ProductImage {...props} />
    };

    let freeImgComponent = create(imgComponent(freeProps));
    let freeInstance = freeImgComponent.root;

    let chosenImgComponent = create(imgComponent(chosenProps));
    let chosenInstance = chosenImgComponent.root;

    it("should be rendered image src in <img> tag", () => {
        let img = freeInstance.findByType("img");
        expect(img.props.src).toBe("https://fake_link");
    })

    it("should be rendered passed weight", () => {
        let wBlock = freeInstance.findByProps({ className: "product-block__weight" });
        expect(wBlock.props.children).toBe("300g");
    })

    it("should be rendered cart icon when item is in cart", () => {
        let activeClass = chosenInstance.findByProps({ className: "product-block__bag-status-icons active" });
        expect(activeClass).not.toBeNull();
    })

    it("should be rendered without cart icon when item is not in cart", () => {
        expect(() => {
            freeInstance.findByProps({ className: "product-block__bag-status-icons active" });
        }).toThrow(Error);
    })
})
