import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container'
import NavBarContainer from './nav_bar/nav_bar_container';
import VideoIndexContainer from './videos/video_index_container';
import { Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_utils';
import VideoShowContainer from './videos/video_show_container';
import Upload from './nav_bar/video_upload';
import SideBar from "./side_bar/side_bar";
import UpdateCommentContainer from './comments/update_comment_container';
import SearchBar from "./nav_bar/search_bar_container";


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
      <Route exact path="/search" component={SearchBar} />
      <Route exact path="/upload" component={Upload} />
      <Route exact path="/videos/:videoId" component={VideoShowContainer} />
      <Route
        exact
        path="/comments/:commentId/edit"
        component={VideoIndexContainer}
      />
      <ProtectedRoute
        exact
        path="/comments/edit/:commentId"
        component={UpdateCommentContainer}
      />
    </Switch>
  </div>
);


