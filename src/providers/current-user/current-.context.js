import React, { useState } from 'react';

const CurrentUserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({user: {}});
  const [loggedIn, setLoggedIn] = useState(false);

  const setCurrentUser = (user) => {
    setUser({displayName: 'chris', email: 'chris510@gmail.com'});
    setLoggedIn(true);
  }

  const logout = () => {
    setUser(null);
    setLoggedIn(false)
  }
  // console.log(user, loggedIn)
  return (
    <CurrentUserContext.Provider 
      value={{
        user,
        loggedIn,
        setCurrentUser,
        logout
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  )
}

export default CurrentUserContext;
export { UserProvider };