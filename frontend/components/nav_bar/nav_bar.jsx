
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineMenu} from "react-icons/ai";
// import {AiOutlineMenu} from "react-icons/ai";
import {BiVideoPlus} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import SearchBar from "./search_bar";
import MenuBar from './menu_bar';

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

const update = (field) => {
    return e => this.setState({ [field]: e.currentTarget.value });
  }


  // const MenuBar = <MenuBar />

  return (
    <div className="nav-bar">
      <div className="logo-and-menu-icon">
        {/* <AiOutlineMenu className="menu-icon" onClick={<MenuBar />}/> */}
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

      {/* <div className="search-bar-and-icon">
        {/* <form className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            onChange={() => {
              update.bind(this);
            }}
          />
          <button className="search-button">
            <AiOutlineSearch className="search-icon" />{" "}
          </button>
        </form> */}

      {/* </div> */}

      <div className="camera-icon-and-session-btn">
        {/* <input className="camera-icon-button" type="file"/> */}
        <BiVideoPlus className="camera-icon" />
        {/* <input type="submit" /> */}
        {display}
      </div>
    </div>
  );

}


