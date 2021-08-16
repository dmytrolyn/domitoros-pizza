import * as types from '../constants/ActionTypes';
import * as API from '../../api/api';
import { reset, stopSubmit } from 'redux-form';

export const addItem = (item, size) => ({
  type: types.ADD_QUANTITY,
  item,
  size,
})

export const subItem = (id, size, toNull = false) => ({
  type: types.SUB_QUANTITY,
  id,
  size,
  toNull
})

export const clearCart = () => ({
  type: types.CHECKOUT
})

export const checkout = (token, order) => async (dispatch) => {
  try {
    debugger;
    let status;
    if(token) {
      status = await API.makeAuthorizedCheckoutRequest(token, order);
    } else {
      status = await API.makeCheckoutRequest(order);
    }
    if(status === 0) {
      dispatch(clearCart());
    } else {
      dispatch(openAlertModal("Some error occurred while ordering, please again try later"))
    }
  } catch(err) {
    dispatch(openAlertModal("Some error occurred while ordering, please again try later"))
  }
}

export const openAuthModal = () => ({
  type: types.OPEN_AUTH_MODAL,
})

export const closeAuthModal = () => ({
  type: types.CLOSE_AUTH_MODAL,
})

export const openAlertModal = (message) => ({
  type: types.OPEN_ALERT_MODAL,
  message
})

export const closeAlertModal = () => ({
  type: types.CLOSE_ALERT_MODAL,
})

export const startPageLoading = () => ({
  type: types.START_PAGE_LOADING
})

export const endPageLoading = () => ({
  type: types.END_PAGE_LOADING
})

const setPageError = (errMsg) => ({
  type: types.SET_PAGE_ERROR,
  error: errMsg
})

export const sendFeedback = (data) => async (dispatch) => {
  try {
    let response = await API.makeFeedbackRequest(data);
    if(response === 0) {
        dispatch(openAlertModal("Your message was successfully delivered"));
    }
  } catch (err) {
      console.log(err);
  }
}

export const setPizzas = (pizzas) => ({
  type: types.SET_PIZZAS,
  pizzas
})

export const getPizzasFromServer = () => async (dispatch) => {
  try {
    dispatch(startPageLoading());
    let response = await API.getPizzasRequest();
    dispatch(endPageLoading());
    if(response.resultCode === 0) {
      dispatch(setPizzas(response.pizzas));
    } else {
      dispatch(setPageError("Some error occurred, please try later"));
    }
  } catch (err) {
    dispatch(endPageLoading());
    dispatch(setPageError("Some error occurred, please try later"));
  }
}

export const setDesserts = (desserts) => ({
  type: types.SET_DESSERTS,
  desserts
})

export const getDessertsFromServer = () => async (dispatch) => {
  try {
    dispatch(startPageLoading());
    let response = await API.getDessertsRequest();
    dispatch(endPageLoading());
    if(response.resultCode === 0) {
      dispatch(setDesserts(response.desserts));
    } else {
      dispatch(setPageError("Some error occurred, please try later"));
    }
  } catch (err) {
    dispatch(endPageLoading());
    dispatch(setPageError("Some error occurred, please try later"));
  }
}

export const setDrinks = (drinks) => ({
  type: types.SET_DRINKS,
  drinks
})

export const getDrinksFromServer = () => async (dispatch) => {
  try {
    dispatch(startPageLoading());
    let response = await API.getDrinksRequest();
    dispatch(endPageLoading());
    if(response.resultCode === 0) {
      dispatch(setDrinks(response.drinks));
    } else {
      dispatch(setPageError("Some error occurred, please try later"));
    }
  } catch (err) {
    dispatch(endPageLoading());
    dispatch(setPageError("Some error occurred, please try later"));
  }
}

export const setUserData = (data) => ({
  type: types.SET_USER_DATA,
  data
})

export const initLogin = (payload) => async (dispatch) => {
  try {
    let response = await API.makeLoginRequest(payload);
    if(response.resultCode === 0) {
      let { token } = response;
      let userResponse = await API.getUserRequest(token);
      if(userResponse.resultCode === 0) {
        dispatch(setUserData({ token, data: userResponse.data }))
        dispatch(closeAuthModal());
      } else {
        dispatch(stopSubmit('auth', { _error: "Something went wrong, please try later" }))
      }
    } else {
      dispatch(stopSubmit('auth', { _error: response.message }))
    }
  } catch(err) {
    dispatch(stopSubmit('auth', { _error: "Something went wrong, please try later" }))
  }
}

export const initRegister = (payload) => async (dispatch) => {
  try {
    let response = await API.makeRegisterRequest(payload);
    if(response.resultCode === 0) {
      dispatch(reset('register'));
      dispatch(openAlertModal("Your account was successfully registered"));
    } else {
      dispatch(stopSubmit('register', { _error: response.message }))
    }
  } catch(err) {
    dispatch(stopSubmit('register', { _error: "Something went wrong, please try later" }))
  }
}

export const logout = () => ({
  type: types.LOGOUT
})

export const updateUser = (data) => async (dispatch) => {
  try {
    let response = await API.makeUpdateUserProfileRequest(data);
    if(response.resultCode === 0) {
      dispatch(openAlertModal("Your account was successfully updated!"));
      let userResponse = await API.getUserRequest(data.token);
      if(userResponse.resultCode === 0) {
        dispatch(setUserData({ data: userResponse.data }));
      }
    } else {
      dispatch(stopSubmit('profile', { _error: response.message }));
    }
  } catch(err) {
    dispatch(stopSubmit('profile', { _error: "Something went wrong, please try later" }));
  }
}

export const getUser = (token) => async (dispatch) => {
  try {
    dispatch(startPageLoading());
    let response = await API.getUserRequest(token);
    dispatch(endPageLoading());
    if(response.resultCode === 0) {
      dispatch(setUserData(response.data))
    } else {
      dispatch(setPageError("Some error occurred, please try later"));
    }
  } catch(err) {
    dispatch(endPageLoading());
    dispatch(setPageError("Some error occurred, please try later"))
  }
}


