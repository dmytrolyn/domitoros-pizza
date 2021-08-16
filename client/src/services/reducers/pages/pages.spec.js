import pages from './pages';
import { setPizzas, setDrinks, setDesserts, startPageLoading, endPageLoading } from '../../actions';

let initialState = {
    pizzas: [],
    drinks: [],
    desserts: [],
    isLoading: false
}

let someProducts = [
    {
        _id: "someHexadecimalValue",
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
    },
    {
        _id: "someHexadecimalValue2",
        name: "Georgina",
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
    }
]

describe("Pages reducer", () => {
    it("should provide with initial value", () => {
        expect(pages(undefined, {})).toEqual(initialState);
    })

    it("should start page loading", () => {
        let state = pages(initialState, startPageLoading());
        expect(state.isLoading).toBe(true);
    })

    it("should finish page loading", () => {
        let state = pages(initialState, startPageLoading());
        state = pages(state, endPageLoading());
        expect(state.isLoading).toBe(false);
    })

    it("should set loaded products", () => {
        let state = pages(initialState, setPizzas(someProducts));
        expect(state.pizzas).toEqual(someProducts);
        expect(state.pizzas.length).toBe(2);

        state = pages(initialState, setDrinks(someProducts));
        expect(state.drinks).toEqual(someProducts);
        expect(state.drinks.length).toBe(2);
        
        state = pages(initialState, setDesserts(someProducts));
        expect(state.desserts).toEqual(someProducts);
        expect(state.desserts.length).toBe(2);
    })
})