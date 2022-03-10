
import React from 'react';
import { Link } from 'react-router-dom';
import {BiVideoPlus} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import SearchBar from "./search_bar";
import MenuBar from './menu_bar';
// import Upload from "../nav_bar/video_upload";

export default ({ currentUser, logout, videos, fetchVideos }) => {
const display = currentUser ? (
  <div className="session-bar">
    <div className="session-bar-tooltip" data-tooltip="Logout">
      <button className="btn-sign-out" onClick={logout}>
        <CgProfile className="Sign-out-icon" />
      </button>     
    </div>
  </div>
) : (
  <div className="session-bar">
    <Link className="btn-sign-in" to="/login">
      <CgProfile className="Sign-in-icon" />
      <span className="sign-in-font">SIGN IN</span>
    </Link>
  </div>
);


  return (
    <div className="nav-bar">
      <div className="logo-and-menu-icon">
        <div className="menu-icon">
          <MenuBar />
        </div>
        <h1 className="logo">
          <Link className="ya" to="/">
            Y a
          </Link>
          <Link className="tube" to="/">
            Tube
          </Link>
        </h1>
      </div>

      <SearchBar />

      <div className="camera-icon-and-session-btn">
      
          <BiVideoPlus className="camera-icon" />
       

        {display}
      </div>
    </div>
  );

}


