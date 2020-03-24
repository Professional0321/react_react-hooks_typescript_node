import React, { useState, useContext } from 'react';
import './sign-in.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import User from '../../interface/user.interface';

import { UserContext } from '../../providers/user/user.provider';

const SignIn = () => {
  const { loggedInStatus, changeLoginStatus, loginUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let demoEmailCounter = 0;
  let demoPasswordCounter = 0;
  let demoEmailField = '';
  let demoPasswordField = '';

  const resetCredentials = () => {
    setEmail('');
    setPassword('');
  }

  const handleDemoLogin = () => {
    resetCredentials();
    demoLogin();
  }

  const demoLogin = () => {
    const demoEmail = "demo_user@gmail.com";
    const demoPassword = "demouser123";
    let typespeed = 100;
    if (demoEmailCounter < demoEmail.length) {
      demoEmailField = demoEmailField + demoEmail.charAt(demoEmailCounter);
      setEmail(demoEmailField);
      demoEmailCounter++;
      setTimeout(demoLogin, typespeed);
    } else if (demoPasswordCounter < demoPassword.length) {
      demoPasswordField = demoPasswordField + demoPassword.charAt(demoPasswordCounter);
      setPassword(demoPasswordField);
      demoPasswordCounter++;
      setTimeout(demoLogin, typespeed);
    } else {
      loginUser({ email: demoEmail, password: demoPassword });
      console.log(email, password);
      changeLoginStatus(true);
      demoEmailCounter = 0;
      demoPasswordCounter = 0;
      demoEmailField = 0;
      demoPasswordField = 0;
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    const newUser = { email, password };
    loginUser(newUser);
  }

  const handleChange = event => {
    const { value, name } = event.target;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput 
          name={"email"} 
          type={"email"} 
          value={email} 
          handleChange={() => handleChange}
        />
        <FormInput 
          name={"password"} 
          type={"password"} 
          value={password} 
          handleChange={() => handleChange}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <button onClick={handleDemoLogin}>DEMO LOGIN></button>
          <CustomButton type="button" onClick={() => handleDemoLogin}>Demo Login</CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn;