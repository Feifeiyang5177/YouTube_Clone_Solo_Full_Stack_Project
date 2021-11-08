import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container'
import NavBarContainer from './nav_bar/nav_bar_container';
import VideoIndexContainer from './videos/video_index_container';
import { Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_utils';
import SideBar from './side_bar/side_bar';
import SideBarContainer from './side_bar/side_bar_container'
// import Home from './home/home.jsx'



export default () => (
  <div>
      
    <Switch>
      <Route exact path="/" component={NavBarContainer}/>
      <Route path="/sidebar" componenet={SideBarContainer}/>
      <Route exact path="/watch/:videoId" componenet={NavBarContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer} />
      {/* <Route exact path="/" component={Home}/> */}
      <ProtectedRoute path="/videos" component={VideoIndexContainer} />
    </Switch>
  </div>
);


