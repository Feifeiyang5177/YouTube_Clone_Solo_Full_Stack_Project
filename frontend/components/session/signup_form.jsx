import React from 'react';
import { Link } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
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
    this.props.signUp(this.state)
      .then(() => this.props.history.push('/videos'));
  }

  render() {
    // console.log(this.props);

    return (
      <div className="session-form">

        <h2 className="sign-up">Sign Up</h2>

        <form className="signup-form">
          <label className="lable">Username:
            <input
            className="input"
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
            />
          </label >

          <label className="label">Email:
              <input className="input"
                type="text"
                value={this.state.email}
                onChange={this.handleInput('email')}
              />
          </label>

          <label className="label">Password:
            <input
            className="input"
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
            <button onClick={this.handleSubmit}>Sign Up!</button>
          </label>
        </form>
      </div>
    );
  }
}

export default Signup;

























// import React from 'react';
// // import { Link } from 'react-router-dom';
// class SignupForm extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             username: '',
//             email: '',
//             password: '',
//         }
//         this.handleSubmit = this.handleSubmit.bind(this);

//         this.props.clearErrors();
//     }
//     handleInput(field) {
//         return (e) => {
//             this.setState({[field]: e.target.value}); 
//         }
//     } 
//     handleSubmit(e) {
//         e.preventDefault();
//         // console.log(this.state) 
//         // this.props.signUp(this.state)
//         this.props.action(this.state);
//         this.props.history.push('/')

//         // .then(() => this.props.history.push('/'));
//     }
//     renderError(errorMessages) {
//         return (
//             <ul className="error-message">
//                 { errorMessages.map((error, idx) => {
//                     return (
//                         <li key={idx}>
//                             {error}
//                         </li>
//                     )
//                 })}
//             </ul>
//         )
//     }
//     render() {
//         return (
//             <div className="session-form">
//                 <h1>Sign Up!</h1>


//                     <form onSubmit={this.handleSubmit}>

//                         <div className="form-header">
//                             {/* <img src={window.youcastLogo} alt="logo" /> */}
//                             <h3>Create Your Account</h3>
//                             <p>to continue to YaTube</p>
//                         </div>

//                         <label>Username:
//                             <input
//                             className="form-input-field username"
//                             type="text"
//                             value={this.state.username}
//                             onChange={this.handleInput('username')}
//                             />
//                         </label>
//                         <label>Email:
//                             <input
//                             className="form-input-field email"
//                             type="text"
//                             value={this.state.email}
//                             onChange={this.handleInput('email')}
//                             />
//                         </label>
//                         <label>Password:
//                             <input
//                             className="form-input-field password"
//                             type="password"
//                             value={this.state.password}
//                             onChange={this.handleInput('password')}
//                             />
//                         </label>
//                         { this.props.errors.length > 0 ? this.renderError(this.props.errors) : null}
                    
//                         <button onClick={this.handleSubmit}>Sign Up</button>
                
//                     </form>

//             </div>
            
//         )
//         }
// }

// export default SignupForm