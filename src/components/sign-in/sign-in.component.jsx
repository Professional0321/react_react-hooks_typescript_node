import React, { useState } from 'react';
import './sign-in.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import User from '../../interface/user.interface';
import { login } from '../../providers/current-user/session_api_util';

import CurrentUserContext from '../../providers/current-user/current-.context';

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({ email: '', password: '' })
  const { email, password } = userCredentials

  const handleSubmit = event => {
    event.preventDefault();
    const newUser = {email, password}
    login(newUser).then(user => console.log(user));
  }

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({...userCredentials, [name]: value})
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
        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  )
}

export default SignIn;