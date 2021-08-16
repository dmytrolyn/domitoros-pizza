import axios from 'axios';

const baseInstance = axios.create({
    baseURL: 'http://localhost:3456/api/v1'
})

const protectedInstance = (token) => axios.create({
    baseURL: 'http://localhost:3456/api/v1',
    headers: { 
        'Authorization': `Bearer ${token}`
    }
})

export const getPizzasRequest = () => baseInstance.get('/pizzas').then(resp => resp.data);

export const getPopularPizzasRequest = () => baseInstance.get('/pizzas/popular').then(resp => resp.data);

export const getDessertsRequest = () => baseInstance.get('/desserts').then(resp => resp.data);

export const getDrinksRequest = () => baseInstance.get('/drinks').then(resp => resp.data);

export const makeAuthorizedCheckoutRequest = (token, data) => protectedInstance(token).post('/orders/insert', { order: data })
.then(resp => resp.data.resultCode);

export const makeCheckoutRequest = (data) => baseInstance.put('/orders/insert', { order: data })
.then(resp => resp.data.resultCode);

export const makeFeedbackRequest = (data) => baseInstance.post('/feedback/send', data)
.then(resp => resp.data.resultCode );

export const makeLoginRequest = ({ login, password }) => baseInstance.post('/auth/login', { login, password })
.then(resp => resp.data);

export const getUserRequest = (token) => protectedInstance(token).get('/auth/me').then(resp => resp.data);

export const makeRegisterRequest = (payload) => baseInstance.post('/auth/register', payload).then(resp => resp.data);

export const getUserHistoryRequest = (token) => protectedInstance(token).get('/users/history').then(resp => resp.data);

export const makeUpdateUserProfileRequest = ({ token, change, data }) => protectedInstance(token).post('/users/update', { change, data })
.then(resp => resp.data);
