
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch} from "react-icons/ai";
import {AiOutlineMenu} from "react-icons/ai";
import {BiVideoPlus} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";

export default ({ currentUser, logout }) => {
const display = currentUser ? (
  <div>
    <button className="button" onClick={logout}>
      Sign out
    </button>
  </div>
) : (
  <div className="session-bar">
    {/* <Link className="btn-sign-up" to="/signup"><span className="sign-up">Sign Up </span></Link> */}
    <Link className="btn-sign-in" to="/login">
      <CgProfile className="Sign-in-icon"/>
      <span className="sign-in-font">SIGN IN</span>
    </Link>
  </div>
);

  return (
    // <div className="header">
    <div className="nav-bar">
      <div className="logo-and-menu-icon">
        <AiOutlineMenu className="menu-icon" />
        <h1 className="logo">
          <Link className="ya" to="/">
            Y a
          </Link>
          <Link className="tube" to="/">
            Tube
          </Link>
        </h1>
      </div>

      <div className="search-bar-and-icon">
        <div className="search-bar">
          <input className="search-input" type="text" placeholder="Search" />
          <p>
            <button className="search-button">
              <AiOutlineSearch className="search-icon" />{" "}
            </button>
          </p>
        </div>
      </div>

      <div className="camera-icon-and-session-btn">
        <BiVideoPlus className="camera-icon" />
        {display}
      </div>
    </div>

    // </div>
  );
}
