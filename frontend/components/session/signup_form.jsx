import React from 'react';
import { Link } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }
  componentDidMount() {
    this.props.clearErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .signUp(this.state)
      .then(() => this.props.history.push("/videos"));
  }

  loginDemo() {
    this.props
      .login({
        username: "Demo5",
        email: "user5@gmail.com",
        password: "555555",
      })
      .then(() => this.props.history.push("/"));
  }

  renderErrors() {
    return (
      <div className="signin-errors">
        {(this.props.errors || []).map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </div>
    );
  }

  // renderErrors() {
  //   return (
  //     <ul>
  //       {Object.keys(this.state.errors).map((error, i) => (
  //         <li style={{ marginBottom: 10 }} key={`error-${i}`}>
  //           {this.state.errors[error]}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    return (
      <div className="session-form-sign-up">
        <form className="content-form">
          <img className="session-logo-img" src={window.yatubeLogoURL} />
          <h2 className="title">Sign Up</h2>
          <br></br>
          <h3 className="sub-title">Create Your Yatube Account</h3>

          <div className="lables">
            <label className="input-form">
              <input
                className="input"
                type="text"
                value={this.state.username}
                placeholder="Username"
                // size="70"
                onChange={this.handleInput("username")}
              />
            </label>

            <label className="input-form">
              <input
                className="input"
                type="text"
                value={this.state.email}
                placeholder="Email"
                // size="70"
                onChange={this.handleInput("email")}
              />
            </label>

            <label className="input-form">
              <input
                className="input"
                type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.handleInput("password")}
              />
            </label>
          </div>
          {this.renderErrors()}
          <button className="button" onClick={this.handleSubmit}>
            Next
          </button>
          <br></br>
          <button className="button2" onClick={this.loginDemo}>
            Demo
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
