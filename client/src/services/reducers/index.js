import { combineReducers } from 'redux'
import cart, * as fromCart from './cart/cart';
import modal, * as fromModal from './modal/modal';
import pages, * as fromPages from './pages/pages';
import auth, * as fromAuth from './auth/auth';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  cart,
  modal,
  pages,
  auth,
  form: formReducer
})

// cart
export const getQuantities = (state, productId) => fromCart.getQuantities(state.cart, productId);
export const getCheckoutItems = (state) => fromCart.getCheckoutItems(state.cart);
export const getTotalPrice = (state) => fromCart.getTotalPrice(state.cart);
export const getTotalCount = (state) => fromCart.getTotalCount(state.cart);
// pages
export const getPizzas = (state) => fromPages.getPizzas(state.pages);
export const getDesserts = (state) => fromPages.getDesserts(state.pages);
export const getDrinks = (state) => fromPages.getDrinks(state.pages);
export const getPageLoadingStatus = (state) => fromPages.getPageLoadingStatus(state.pages);
export const getError = (state) => fromPages.getError(state.pages);
// modal 
export const authModalStatus = (state) => fromModal.authModalStatus(state.modal);
export const alertModalStatus = (state) => fromModal.alertModalStatus(state.modal);
export const alertModalMessage = (state) => fromModal.alertModalMessage(state.modal);
// auth
export const getLogin = (state) => fromAuth.getLogin(state.auth);
export const getToken = (state) => fromAuth.getToken(state.auth);
export const getHistory = (state) => fromAuth.getHistory(state.auth);
export const getUserLoading = (state) => fromAuth.getLoading(state.auth);
export const getProfile = (state) => fromAuth.getProfile(state.auth);
