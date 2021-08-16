import { SET_USER_DATA, LOGOUT } from '../../constants/ActionTypes';

const initialState = {
    token: null,
    data: null,
}

const manageAuth = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        case LOGOUT: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}
    
export default manageAuth;

export const getLogin = (state) => state.data && state.data.login;
export const getToken = (state) => state.token;
export const getHistory = (state) => state.data && state.data.orders;
export const getProfile = (state) => state.data;
export const getLoading = (state) => state.loading;