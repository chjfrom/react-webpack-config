import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import { Provider } from 'react-redux';
import store from '../store';
import { Global } from '@emotion/react';
const ResetCss = require('../public/style/global.css');

ReactDOM.render(
  <Provider store={store}>
    <Global styles={{ ResetCss }} />
    <App />
  </Provider>,
  document.getElementById('app'),
);
