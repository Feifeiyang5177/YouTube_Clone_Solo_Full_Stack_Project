import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container'
import NavBarContainer from './nav_bar/nav_bar_container';
import VideoIndexContainer from './videos/video_index_container';
import { Route, Switch, Redirect} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_utils';



export default () => (
  <div>
    <Route path="/" component={NavBarContainer}/>
    <AuthRoute path="/login" component={LoginContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <ProtectedRoute path="/videos" component={VideoIndexContainer} />
  </div>
);


