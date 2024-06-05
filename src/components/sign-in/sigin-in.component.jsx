import React, { Component } from "react";

class SignIn extends Component {
  constructor() {
    super();

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
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <label>Email:</label>
          <input
            name="email"
            type="text"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <label>Password:</label>
          <input
            name="password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
            required
          />

          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
