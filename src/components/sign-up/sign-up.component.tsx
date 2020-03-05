import React from 'react';

import './sign-up.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import User from '../../interface/user.interface';

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

  handleSubmit = async (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password doesn't match!");
      return;
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
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
        <form className="sign-up-form" onSubmit={() => this.handleSubmit}>
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
            type={'confirmPassword'}
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