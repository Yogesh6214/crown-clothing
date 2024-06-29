import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.style.scss"; // corrected typo here

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="text"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
            autoComplete="true"
          />

          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
            required
            autoComplete="true"
          />
          <div className="buttons">
            <CustomButton type="submit">SignIN</CustomButton>
            <CustomButton
              isGoogleSignIn
              onClick={() => {
                // Close any existing popups
                window.close();

                // Trigger the sign-in process
                signInWithGoogle().catch((error) => {
                  // Handle errors here
                  console.error(error);
                });
              }}
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
