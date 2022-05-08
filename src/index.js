import React from 'react';
import ReactDOM from 'react-dom/client';

import MainPage from './pages/main.js'
import AuthPage from './pages/auth.js'
import AboutPage from './pages/about.js'

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthPage />
  </React.StrictMode>
);
