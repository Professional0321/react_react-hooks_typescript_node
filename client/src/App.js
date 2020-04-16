import React, { useContext } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'; 
import { GlobalStyle } from './global.styles';
import { CartContext } from './providers/cart/cart.provider';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Session from './pages/session/session.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Splash from './components/splash/splash.component';

const App = ({ location }) => {
  const { pathname } = location;


  return (
      <div className="app">
        <GlobalStyle/>
          {pathname !== "/" ? <Header/> : null}
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

export default withRouter(App);
