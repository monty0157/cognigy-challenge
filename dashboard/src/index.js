import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from './layouts/MainLayout.jsx';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<MainLayout />, document.getElementById('root'));
registerServiceWorker();
