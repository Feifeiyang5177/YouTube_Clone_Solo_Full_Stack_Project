import React from 'react';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  } 

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/videos'));
  }

  render() {
    return (
      <div className="session-form">
        

        <form className="content-form">
        <img className='session-logo-img' src={window.yatubeLogoURL}/>
        <h2 className="title">Sign In</h2>
        <br></br>
        <h3 className='sub-title'>to continue to YaTube</h3>
        

          <div className="lables">
            <label className="username">
              <input
              className="input"
                type="input"
                value={this.state.username}
                placeholder='Username'
                size='70'
                onChange={this.handleInput('username')}
              />
            </label>

            <label className="password">
              <input
              className="input"
                type="input"
                value={this.state.password}
                placeholder='Password'
                size='70'
                onChange={this.handleInput('password')}
              />
            </label>
          </div>
          <button className="button" onClick={this.handleSubmit}>Next</button>

        </form>
      </div>
    );
  }
}

export default Login