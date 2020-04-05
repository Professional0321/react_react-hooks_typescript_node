import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import { GlobalStyle } from './global.styles';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Session from './pages/session/session.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Splash from './components/splash/splash.component';

const App = () => {
  return (
      <div>
        <GlobalStyle/>
        <Header/>
        <Switch>
          <Route exact path="/" component={Splash}/>
          <Route exact path="/home" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin" component={Session}/>
          <Route exact path="/checkout" component={CheckoutPage}/>
        </Switch>
      </div>
  )
}

export default App;
