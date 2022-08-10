/**
 * DEVELOPMENT
 * clears console of error messages between hotswaps
 * @link https://github.com/vitejs/vite/discussions/3143
 */ 
 if (import.meta.hot) {
  import.meta.hot.on(
    "vite:beforeUpdate",
    () => console.clear()
  );
};
// DEVELOPMENT


// 3rd Parties
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// CSS
import './css/global.css';
import './css/palettes.css';
import './css/typography.css';
import './main.css';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);