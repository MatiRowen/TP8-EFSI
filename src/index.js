import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/NavBar';
import { CartContext } from './context/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContext.Provider>
    <Navbar />
    <App />
    </CartContext.Provider>
  </React.StrictMode>
);


