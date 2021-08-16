import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import Modal from 'react-modal';
import reducer from './services/reducers';
import thunk from 'redux-thunk';

Modal.setAppElement('#root');

const middleware = [ thunk ];
const composeEnhancers = compose(applyMiddleware(...middleware), typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ;

const store = createStore(
  reducer,
  composeEnhancers
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
