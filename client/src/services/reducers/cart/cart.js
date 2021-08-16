import {
    ADD_QUANTITY,
    SUB_QUANTITY,
    CHECKOUT,
} from '../../constants/ActionTypes';
import { createSelector } from 'reselect';

const initialState = {
    chosenItems: [],
    quantityById: {}
}

const incrementQuantity = (quantities, id, size) => ({
    ...quantities,
    [id] : {
        ...quantities[id],
        [size]: (quantities[id] && quantities[id][size] + 1) || 1
    }
})

const decrementQuantity = (quantities, id, size, toNull) => ({
    ...quantities,
    [id] : {
        ...quantities[id],
        [size]: !toNull ? quantities[id][size] - 1 : 0
    }
})

const deleteQuantities = (id, { [id]: _, ...quantities}) => quantities;

const manageItems = (state, action) => {
    let { chosenItems, quantityById } = state;

    switch (action.type) {
        case ADD_QUANTITY: {
            const { item, size } = action;

            let containsItem = chosenItems.some(currItem => currItem._id === item._id)

            return { 
                chosenItems: containsItem ? chosenItems : [...chosenItems, item],
                quantityById: incrementQuantity(quantityById, item._id, size)
            }
        }
        case SUB_QUANTITY: {
            const { id, size, toNull } = action;

            if(quantityById[id][size] > 0) {
                quantityById = decrementQuantity(quantityById, id, size, toNull);
            }

            let isAllSizesNull = Object.values(quantityById[id]).every(val => val === 0);

            return {
                chosenItems: isAllSizesNull ? chosenItems.filter(item => item._id !== id) : chosenItems,
                quantityById: isAllSizesNull ? deleteQuantities(id, quantityById) : quantityById
            }
        }

        default:
            return state
    }
}

const getItems = (state) => state.chosenItems;
const getAllQuantities = (state) => state.quantityById;

const getCurrentTotalPrice = (state, item) => 
    Object.keys(state[item._id])
        .reduce((total, key) =>
        total + Number(item.price[key].value) * state[item._id][key],
        0
    )

const getCurrentTotalCount = (state, item) => 
    Object.keys(state[item._id])
        .reduce((total, key) =>
        total + state[item._id][key],
        0
    )

const createTmpCheckoutItemArray = (itemData, quantities) =>
    Object.keys(quantities).reduce((tempArr, size) => {
        let isNull = quantities[size] === 0; 
        return !isNull ? [...tempArr, {
            item: {...itemData, price: itemData.price[size]},
            count: quantities[size],
            size
        }] : tempArr;
    }, [])

export const getQuantities = (state, productId) => state.quantityById[productId] || 0;

export const getCheckoutItems = createSelector(getItems, getAllQuantities, (items, quantities) => 
    Object.keys(quantities).reduce((resultArr, id) => {
        let currentItem = items.find(item => item._id === id);
        let itemSizesArr = createTmpCheckoutItemArray(currentItem, quantities[id]);
        return [...resultArr, ...itemSizesArr];
    }, []))

export const getTotalPrice = createSelector(getItems, getAllQuantities, (items, quantities) => 
    items.reduce((total, item) => 
        total + getCurrentTotalPrice(quantities, item),
        0
))

export const getTotalCount = createSelector(getItems, getAllQuantities, (items, quantities) => 
    items.reduce((total, item) => 
        total + getCurrentTotalCount(quantities, item),
        0
))  

const cart = (state = initialState, action) => {
    switch (action.type) {
        case CHECKOUT:
            return initialState;
        default:
            return manageItems(state, action);
    }
}

export default cart;