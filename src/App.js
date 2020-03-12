import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Session from './pages/session/session.component';

import CurrentUserContext from './context/current-user/current-user.context';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={Session}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
