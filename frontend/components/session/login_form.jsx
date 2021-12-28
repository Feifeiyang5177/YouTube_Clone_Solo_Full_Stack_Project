import React from 'react';
import { Link } from 'react-router-dom';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      // errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.login(this.state).then(() => this.props.history.push("/videos"));
  }
  renderErrors() {
    return (
      <div>
        {(this.props.errors || []).map((error, i) => (
          <div className="signin-errors" key={i}>
            {error}
          </div>
        ))}
      </div>
    );
  }
  // renderErrors() {
  //   return (
  //     <ul>
  //       {Object.keys(this.state.errors).map((error, i) => (
  //         <li className="signin-errors" style={{ marginBottom: 10 }} key={`error-${i}`}>
  //           {this.state.errors[error]}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }
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
          <Link to="/signup">Create Account</Link>
        </form>
      </div>
    );
  }
}

export default Login