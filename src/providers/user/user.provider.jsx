import React, { createContext, useState, useEffect } from 'react';

import { login, signup } from './user.utils';

export const UserContext = createContext({
  loggedInStatus: false,
  changeLoginStatus: () => {},
  loginUser: (user) => {},
  signupUser: (user) => {}
})

const UserProvider = ({ children }) => {
  const [loggedInStatus, setLoggedInStatus] = useState(false);

  const changeLoginStatus = (status) => {
    setLoggedInStatus(status);
  }

  const loginUser = user => {
    login(user).then(res => {
      changeLoginStatus(true)
      console.log(loggedInStatus)
      alert('User is logged in!');
    }).catch(err => {
      // console.log('User logged in error: ', JSON.parse(error));
      alert("User Credentials are wrong!");
    })
  }

  const signupUser = user => {
    signup(user).then(res => {
      setLoggedInStatus(true);
      console.log(loggedInStatus);
      alert('User has been signed up!');
    }).catch(err => {
      alert("User cannot be created!")
    })
  }

  return (
    <UserContext.Provider
      value={{
        loggedInStatus,
        changeLoginStatus,
        loginUser,
        signupUser
      }}
    >
      { children }
    </UserContext.Provider>
  )
}

export default UserProvider;