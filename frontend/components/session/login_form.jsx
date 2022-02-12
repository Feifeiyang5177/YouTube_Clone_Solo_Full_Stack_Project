import React from 'react';
import { Link } from 'react-router-dom';
import {MdError} from 'react-icons/md';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      // isSubmited: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

//  shouldComponentUpdate(nextProps, nextState){
//     if(nextProps.errors.length === 0 && this.state.isSubmited === true) {
//       this.props.login(this.state);
//     }
//     return true;
//   }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.setState({ isSubmited: true });
    this.props.login(this.state).then(() => this.props.history.push("/"));
  }

  loginDemo() {
    this.props
      .login({
        username: "DemoUser 演示者",
        email: "user5@gmail.com",
        password: "555555",
      })
      .then(() => this.props.history.push("/"));
  }

  renderErrors() {
    return (
      <div className="signin-errors">
        {(this.props.errors || []).map((error, i) => (
          <div className="signin-error" key={i}>
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
          <h2 className="title">Sign In</h2>
          <br></br>
          <h3 className="sub-title">to continue to YaTube</h3>

          <div className="lables">
            <label className="input-form">
              <input
                className="input"
                type="input"
                value={this.state.username}
                placeholder="Username"
                onChange={this.handleInput("username")}
              />
            </label>

            <label className="input-form">
              <input
                className="input"
                type="input"
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

          <div className="signup-and-demo-user-session">
            <Link className="signup-link" to="/signup">
              Create Account
            </Link>
            {/* <div> or </div> */}
            <button className="login-page-demo-user" onClick={this.loginDemo}>
              Demo Login
            </button>
          </div>
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
              <a href="https://github.com/Feifeiyang5177" target="_blank">
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Login