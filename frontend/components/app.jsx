import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container'
import NavBarContainer from './nav_bar/nav_bar_container';
import VideoIndexContainer from './videos/video_index_container';
import { Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_utils';
import VideoShowContainer from './videos/video_show_container';
// import SearchBarContainer from './nav_bar/search_bar_container';
import SideBar from "./side_bar/side_bar";




export default () => (
  <div>
    <header>
      <Route exact path="/" component={NavBarContainer} />
      <Route exact path="/" component={SideBar} /> 
    </header>
    <Switch>
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer} />
      <Route exact path="/" component={VideoIndexContainer} />
      <Route exact path="/search" component={VideoIndexContainer} />
      <Route exact path="/videos/:videoId" component={VideoShowContainer} />
      <Route
        exact
        path="/comments/:commentId/edit"
        component={VideoIndexContainer}
      />
    </Switch>
  </div>
);


