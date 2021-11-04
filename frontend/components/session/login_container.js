import { connect } from 'react-redux';
import { logIn } from '../../actions/session_actions';
import Login from './login';

const mapDispatchToProps = dispatch => ({
    
  login: formUser => dispatch(logIn(formUser)),
});

export default connect(null, mapDispatchToProps)(Login);