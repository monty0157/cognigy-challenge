import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from './layouts/MainLayout.jsx';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './mainRedux/store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <MainLayout />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
