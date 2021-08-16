import { SET_PIZZAS, SET_DRINKS, SET_DESSERTS, START_PAGE_LOADING, SET_PAGE_ERROR, END_PAGE_LOADING } from '../../constants/ActionTypes';

const initialState = {
    pizzas: [],
    desserts: [],
    drinks: [],
    isLoading: false,
    error: null
}

const managePages = (state = initialState, action) => {
    switch(action.type) {
        case SET_PIZZAS: {
            return {
                ...state,
                pizzas: action.pizzas,
            }
        }
        case SET_DESSERTS: {
            return {
                ...state,
                desserts: action.desserts,
            }
        }
        case SET_DRINKS: {
            return {
                ...state,
                drinks: action.drinks,
            }
        }
        case START_PAGE_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case END_PAGE_LOADING: {
            return {
                ...state,
                isLoading: false,
                error: null
            }
        }
        case SET_PAGE_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}
    
export default managePages;

export const getPizzas = (state) => state.pizzas;
export const getDesserts = (state) => state.desserts;
export const getDrinks = (state) => state.drinks;
export const getPageLoadingStatus = (state) => state.isLoading;
export const getError = (state) => state.error;