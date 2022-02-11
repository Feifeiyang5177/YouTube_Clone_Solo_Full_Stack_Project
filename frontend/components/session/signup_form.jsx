import React from 'react';
import { Link } from "react-router-dom";
import { MdError } from "react-icons/md";

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
      .then(() => this.props.history.push("/"));
  }

  loginDemo() {
    this.props
      .login({
        username: "DemoUser",
        email: "user5@gmail.com",
        password: "555555",
      })
      .then(() => this.props.history.push("/"));
  }

  renderErrors() {
    return (
      <div className="signup-errors">
        {(this.props.errors || []).map((error, i) => (
          // <li key={i}>{error}</li>
          <div className="signup-error" key={i}>
            <MdError className="error-icon" />
            <div className="error-messages">{error}</div>
          </div>
        ))}
      </div>
    );
  }


  render() {
    return (
      <div className="session-form">
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
                onChange={this.handleInput("username")}
              />
            </label>

            <label className="input-form">
              <input
                className="input"
                type="text"
                value={this.state.email}
                placeholder="Email"
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
            {this.renderErrors()}
          </div>

          <button className="button" onClick={this.handleSubmit}>
            Next
          </button>
          <br></br>

          <button className="button2" onClick={this.loginDemo}>
            Demo User Login
          </button>
        </form>

        <footer className="footer">
          <div className="footer-left">English(United States)</div>
          <div className="footer-right">
            <div className="f-r-content">
              <a href="https://feifeiyang-swe.com/" target="_blank">
                Portfolio
              </a>
            </div>
            <div className="f-r-content">
              <a
                href="https://www.linkedin.com/in/feifei-yang-6990bb38/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>

            <div className="f-r-content">
              <a
                href="https://github.com/Feifeiyang5177/FullStack_Project"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Signup;
