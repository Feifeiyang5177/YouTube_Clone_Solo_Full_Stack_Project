import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/signup_container'
import NavBarContainer from './nav_bar/nav_bar_container';
import VideoIndexContainer from './videos/video_index_container';
import { Route } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_utils';


export default () => (
  <div>
    <Route path="/" component={NavBarContainer}/>
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <ProtectedRoute path="/videos" component={VideoIndexContainer} />
  </div>
);
























// import SignupContainer from './session/signup_container';


// import React from "react";
// import { Route} from "react-router-dom";
// const App = () => (
//     <div>
//       <Route exact path="/" component={SignupContainer} />
//       <Route exact path="/signup" component={SignupContainer} />
//       {/* <Route exact path="/" component={SignupContainer} /> */}
//   </div>
//   );
   
//   export default App;