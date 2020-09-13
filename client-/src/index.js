import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import Router from './router';
import reducer from './reducer'


const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension():f=>f
))


ReactDOM.render(
  <Provider store = {store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
