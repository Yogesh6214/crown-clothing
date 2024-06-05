import React from "react";

class Sigin extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubimt = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <div className="sign-in">
          <h1>I already have an account</h1>
          <span>Sigin in with your email and password</span>

          <form onSubmit={this.handleSubimt}>
            <lable>Email:</lable>
            <input
              name="email"
              type="text"
              onChange={this.handleChange}
              value={this.state.email}
              required
            />
            <lable>Password:</lable>
            <input
              name="Password"
              type="Password"
              onChange={this.handleChange}
              value={this.state.password}
              required
            />

            <input type="submit" value="Submit Form" />
          </form>
        </div>
      </>
    );
  }
}
export default Sigin;
