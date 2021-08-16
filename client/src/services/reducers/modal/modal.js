import auth, * as fromAuth from './reducers/auth';
import alert, * as fromAlert from './reducers/alert';
import { combineReducers } from 'redux';
    
export default combineReducers({
    auth,
    alert
});

export const authModalStatus = (state) => fromAuth.authModalStatus(state.auth);
export const alertModalStatus = (state) => fromAlert.alertModalStatus(state.alert);
export const alertModalMessage = (state) => fromAlert.alertModalMessage(state.alert);