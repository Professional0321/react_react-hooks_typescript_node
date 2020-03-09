import React from 'react';
import './sign-in.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import User from '../../interface/user.interface';
import { login }from '../../util/session_api_util';


class SignIn extends React.Component<{}, User> {
  constructor(props: {}) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("hello")
    this.setState({
      email: '',
      password: ''
    })

    const newUser = {email: this.state.email, password: this.state.password}
    console.log(newUser);
    login(newUser).then(user => console.log(user));
  }

  handleChange = (event: React.ChangeEvent): void => {
    let target = event.target as HTMLInputElement;
    this.setState({
      [target.name]: target.value
    } as any);
  }
 
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <FormInput 
            name={"email"} 
            type={"email"} 
            value={this.state.email} 
            handleChange={() => this.handleChange}
          />
          <FormInput 
            name={"password"} 
            type={"password"} 
            value={this.state.password} 
            handleChange={() => this.handleChange}
          />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;