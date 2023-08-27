// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import the Provider component
import store from './Store/store'; // Import your Redux store
import './index.css';
import App from './App';

ReactDOM.render(
  // Wrap your App component with Provider and provide the store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
