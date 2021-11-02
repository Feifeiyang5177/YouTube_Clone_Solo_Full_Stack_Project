import SignupContainer from './session/signup_container';
// import VideoIndexContainer from './video/video_index_container';
import React from "react";
import { Route} from "react-router-dom";
const App = () => (
    <div>
      {/* <Route exact path="/" component={SignupContainer} /> */}
      <Route exact path="/signup" component={SignupContainer} />
      {/* <Route exact path="/" component={SignupContainer} /> */}
  </div>
  );
   
  export default App;