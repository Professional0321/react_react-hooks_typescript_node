import React from 'react';

import './sign-up.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import User from '../../interface/user.interface';

import { signup } from '../../providers/current-user/session_api_util';

class SignUp extends React.Component<{}, User> {
  constructor(props: {}) {
    super(props);
    
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password doesn't match!");
      return;
    }
    const newUser = {
      displayName,
      email,
      password,
      confirmPassword
    }
    signup(newUser).then(newUser => console.log(newUser))
  }

  handleChange = (event: React.ChangeEvent): void => {
    let target = event.target as HTMLInputElement;
    this.setState({
      [target.name]: target.value
    } as any);
  }

  render() {
    return (
      <div className="sign-up">
        <h1 className="title">I do not have an account</h1>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={(e) => this.handleSubmit(e)}>
          <FormInput
            name={'displayName'}
            type={'displayName'}
            value={this.state.displayName}
            handleChange={() => this.handleChange}
          />
          <FormInput
            name={'email'}
            type={'email'}
            value={this.state.email}
            handleChange={() => this.handleChange}
          />
          <FormInput
            name={'password'}
            type={'password'}
            value={this.state.password}
            handleChange={() => this.handleChange}
          />
          <FormInput
            name={'confirmPassword'}
            type={'password'}
            value={this.state.confirmPassword}
            handleChange={() => this.handleChange}
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;