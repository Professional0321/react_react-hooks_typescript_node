import React from 'react';

import './sign-up.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
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
        break;
      case ("email"):
        value = email;
        break;
      case ("password"):
        value = password;
        break;
      case ("confirmPassword"):
        value = confirmPassword;
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
          <div className="group">
            <input
              className="form-input"
              name="displayName" 
              type="displayName" 
              value={this.state.displayName} 
              onChange={this.handleChange}
              required={true}
            />
            {this.handleShrinkEffect("displayName")}
          </div>
          <div className="group">
            <input
              className="form-input"
              name="email" 
              type="email" 
              value={this.state.email} 
              onChange={this.handleChange}
              required={true}
            />
            {this.handleShrinkEffect("email")}
          </div>
          <div className="group">
            <input
              className="form-input"
              name="password" 
              type="password" 
              value={this.state.password} 
              onChange={this.handleChange}
              required={true}
            />
            {this.handleShrinkEffect("password")}
          </div>
          <div className="group">
            <input
              className="form-input"
              name="password" 
              type="password" 
              value={this.state.confirmPassword} 
              onChange={this.handleChange}
              required={true}
            />
            {this.handleShrinkEffect("confirmPassword")}
          </div>
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;