import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Greeting from './greeting.jsx';
import { logout } from '../actions/session_actions.js';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Greeting)
);
