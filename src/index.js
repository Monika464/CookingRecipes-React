import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ThemeProvider} from './context/ThemeContext'

console.log(ThemeProvider,'ThemeProvider')

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>

    <App />


  </React.StrictMode>
);
