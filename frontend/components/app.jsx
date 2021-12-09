import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container'
import NavBarContainer from './nav_bar/nav_bar_container';
import VideoIndexContainer from './videos/video_index_container';
import { Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_utils';
import VideoShowContainer from './videos/video_show_container';
import SideBarContainer from './side_bar/side_bar_container'


export default () => (
  <div>
    <header>
      {/* <SideBarContainer /> */}
      <NavBarContainer />
      <Route exact path="/" component={SideBarContainer} />
    </header>
    <Switch>
      {/* <Route path="/sidebar" component={SideBarContainer} /> */}
      <Route exact path="/" component={VideoIndexContainer} />
      <Route exact path="/videos/:videoId" component={VideoShowContainer} />
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer} />
      {/* <Route exact path="/videos" component={VideoIndexContainer} /> */}
    </Switch>
  </div>
);


