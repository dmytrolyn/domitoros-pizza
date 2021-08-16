import cart from './cart';
import { addItem, subItem, prepareCheckout } from '../../actions';
import * as sizes from '../../../utils/sizes';

const initialState = {
    chosenItems: [],
    quantityById: {}
}

const someItem = {
    _id: "someHexadecimalValueId",
    name: "Georgia",
    price: {
        small: {
            weight: "500g",
            value: 150,
            currency: "uah"
        },
        medium: {
            weight: "500g",
            value: 150,
            currency: "uah"
        },
        large: {
            weight: "500g",
            value: 150,
            currency: "uah"
        }
    },
    image: "someLink"
};

describe("Cart reducer", () => {
    it("should provide with initial state", () => {
        expect(cart(undefined, {})).toEqual(initialState);
    })

    it("should add new item to the array", () => {
        let state = cart(initialState, addItem(someItem, sizes.MEDIUM));
        expect(state.chosenItems.length).toBe(1);
    })

    it("should add new quantity to the sizes' object", () => {
        let state = cart(initialState, addItem(someItem, sizes.MEDIUM));
        expect(state.quantityById).toHaveProperty("someHexadecimalValueId");
        expect(state.quantityById["someHexadecimalValueId"]).toHaveProperty(sizes.MEDIUM);
        expect(state.quantityById["someHexadecimalValueId"][sizes.MEDIUM]).toBe(1);
    })

    it("should increment existing item's size count on add", () => {
        let state = cart(initialState, addItem(someItem, sizes.MEDIUM));
        state = cart(state, addItem(someItem, sizes.MEDIUM));
        expect(state.quantityById["someHexadecimalValueId"][sizes.MEDIUM]).toBe(2);
    })

    it("should decrement item's quantity by size", () => {
        let state = cart(initialState, addItem(someItem, sizes.MEDIUM));
        state = cart(state, addItem(someItem, sizes.MEDIUM));
        state = cart(state, subItem("someHexadecimalValueId", sizes.MEDIUM))
        expect(state.quantityById["someHexadecimalValueId"][sizes.MEDIUM]).toBe(1);
    })

    it("should remove item from state when general item's count goes to zero", () => {
        let state = cart(initialState, addItem(someItem, sizes.MEDIUM));
        state = cart(state, subItem("someHexadecimalValueId", sizes.MEDIUM))
        expect(state.chosenItems.length).toBe(0);
    })

    it("should remove item from state when removing item", () => {
        let state = cart(initialState, addItem(someItem, sizes.MEDIUM));
        state = cart(initialState, addItem(someItem, sizes.MEDIUM));
        state = cart(state, subItem("someHexadecimalValueId", sizes.MEDIUM, true))
        expect(state.chosenItems.length).toBe(0);
    })

    it("should set initial state when checkout request returns success", () => {
        let state = cart(initialState, addItem(someItem, sizes.MEDIUM));
        let stateAfterRequest = cart(state, prepareCheckout(0));
        expect(stateAfterRequest).toEqual(initialState);
    })

    it("should save state when checkout request returns failure", () => {
        let state = cart(initialState, addItem(someItem, sizes.MEDIUM));
        let stateAfterRequest = cart(state, prepareCheckout(1));
        expect(stateAfterRequest).toEqual(state);
    })
})