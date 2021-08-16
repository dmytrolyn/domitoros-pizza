import ProductDetails from './ProductDetails';
import { create } from 'react-test-renderer';
import * as funcs from '../../../../../utils/stringManager';

describe('ProductDetails', () => {
    let defProps = {
        price: {
            small: {
                weight: "300g",
                value: 150,
                currency: "uah"
            },
            medium: {
                weight: "500g",
                value: 300,
                currency: "uah"
            },
            large: {
                weight: "1kg",
                value: 450,
                currency: "uah"
            }
        },
        type: "medium",
    }
    let comp = create(<ProductDetails {...defProps} />);
    let instance = comp.root;

    jest.spyOn(funcs, "capitalizeWord").mockImplementation(() => {
        return "Medium";
    })

    it("should be rendered with passed number of sizes", () => {
        let buttonsBlock = instance.findByProps({ className: "product-block__details" });
        expect(buttonsBlock.children.length).toBe(3);
    })

    it("should be rendered with active Medium size button", () => {
        let buttonsBlock = instance.findByProps({ className: "product-block__details" });
        let mediumButton = buttonsBlock.props.children[1];
        expect(mediumButton.props.active).toBe(true)
    })
})
