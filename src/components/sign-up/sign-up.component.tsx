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

  handleShrinkEffect = (labelName: string) => {
    const {displayName, email, password, confirmPassword} = this.state;
    let shrinkClass: string;
    let value: string; 

    switch (labelName) {
      case ("displayName"):
        value = displayName;
        labelName = "display name"
        break;
      case ("email"):
        value = email;
        break;
      case ("password"):
        value = password;
        break;
      case ("confirmPassword"):
        value = confirmPassword;
        labelName = "confirm password"
        break;
    }

    shrinkClass = value.length ? "shrink" : "";

    return (
      <label className={`form-input-label ${shrinkClass}`}>
        {labelName}
      </label>
    )
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
        <form className="sign-up-form">
          <FormInput
            name={'displayName'}
            type={'displayName'}
            value={this.state.displayName}
            handleChange={() => this.handleChange}
            handleShrinkEffect={() => this.handleShrinkEffect('displayName')}
          />
          <FormInput
            name={'email'}
            type={'email'}
            value={this.state.email}
            handleChange={() => this.handleChange}
            handleShrinkEffect={() => this.handleShrinkEffect('email')}
          />
          <FormInput
            name={'password'}
            type={'password'}
            value={this.state.password}
            handleChange={() => this.handleChange}
            handleShrinkEffect={() => this.handleShrinkEffect('password')}
          />
          <FormInput
            name={'confirmPassword'}
            type={'confirmPassword'}
            value={this.state.confirmPassword}
            handleChange={() => this.handleChange}
            handleShrinkEffect={() => this.handleShrinkEffect('confirmPassword')}
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;