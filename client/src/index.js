import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import CartProvider from './providers/cart/cart.provider';
import UserProvider from './providers/user/user.provider';

ReactDOM.render(
  <UserProvider>
    <CartProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </CartProvider>
  </UserProvider>,
  document.getElementById('root')
);
