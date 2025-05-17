import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LightDarkModeProvider } from './context/LightDarkMode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LightDarkModeProvider>
        <App />
      </LightDarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
