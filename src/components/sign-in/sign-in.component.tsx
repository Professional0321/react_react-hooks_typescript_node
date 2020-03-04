import React from 'react';
import './sign-in.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component<{}, {email: string, password: string}> {
  constructor(props: {}) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event: React.FormEvent<HTMLInputElement>): void => {
    event.preventDefault();
    this.setState({
      email: '',
      password: ''
    })
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let target = event.target as HTMLInputElement;
    this.setState({
      [target.name]: target.value
    } as any);
  }

  handleShrinkEffect = (labelName: string): any => {
    const {email, password} = this.state;

    let shrinkClass: string;

    if (labelName === "email") {
      shrinkClass = email.length ? "shrink" : "";
    } else if (labelName === "password") {
      shrinkClass = password.length ? "shrink" : "";
    }

    return (
      <label className={`form-input-label ${shrinkClass}`}>
        {labelName}
      </label>
    )
  }
 
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={() => this.handleSubmit}>
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
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;