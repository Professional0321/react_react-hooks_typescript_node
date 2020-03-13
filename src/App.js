import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Session from './pages/session/session.component';

// import CurrentUserContext from './context/current-user/current-user.context';
import UserProvider from './context/current-user/current-user.context';

const App = () => {
  // const currentUser = { displayName: 'chris', loggedIn: true}
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

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       currentUser: null
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//       <CurrentUserContext.Provider value={this.state.currentUser}>
//         <Header></Header>
//         <Switch>
//           <Route exact path="/" component={HomePage}></Route>
//           <Route path="/shop" component={ShopPage}></Route>
//           <Route path="/signin" component={Session}></Route>
//         </Switch>
//       </CurrentUserContext.Provider>
//       </div>
//     )
//   }
// }

export default App;
