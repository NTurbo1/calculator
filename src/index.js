import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/App-style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <span id='app-creator-info'>Coded by <em>Nurpolat Yerkinbayev</em></span>
  </React.StrictMode>
);
