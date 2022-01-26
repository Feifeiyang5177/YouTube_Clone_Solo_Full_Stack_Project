import React from 'react';
import { Link } from 'react-router-dom';
import {FaGithubAlt,} from "react-icons/fa";
import {RiHomeGearFill} from "react-icons/ri";
import {FcLink} from "react-icons/fc";
import {FiCoffee} from "react-icons/fi";
import {FiLinkedin} from "react-icons/fi";
// import MenuBar from "../nav_bar/menu_bar";

export default () => {

  return (
    <div className="sidebar-parent">
      <header className="side-bar">
        {/* <MenuBar /> */}
        <div className="sidebar-content">
          {/* <RiHomeGearFilsl className='sidebar-icon'/><Link to='/videos' className='sidebar-icon-words'> Home</Link> */}
          <Link to="/">
            <RiHomeGearFill className="sidebar-icon" />
          </Link>
          <div className="sidebar-icon-words"> Home</div>
        </div>

        <div className="sidebar-content">
          {/* <FiLinkedin className='sidebar-icon'/> <a className='sidebar-icon-words' href='https://github.com/Feifeiyang5177'>LinkedIn</a> */}
          <a
            href="https://www.linkedin.com/in/feifei-yang-6990bb38/"
            target="_blank"
          >
            <FiLinkedin className="sidebar-icon" />
          </a>
          <div className="sidebar-icon-words">LinkedIn</div>
        </div>
        <div className="sidebar-content">
          <a href="https://github.com/Feifeiyang5177" target="_blank">
            <FaGithubAlt className="sidebar-icon" />
          </a>
          <div className="sidebar-icon-words">GitHub</div>
        </div>

        <div className="sidebar-content">
          <a href="https://feifeiyang-swe.com/" target="_blank">
            <FcLink className="sidebar-icon" />
          </a>
          <div className="sidebar-icon-words">Portfolio</div>
        </div>
        <div className="sidebar-content">
          <a href="https://en.wikipedia.org/wiki/Feifei_Yang" target="_blank">
            <FiCoffee className="sidebar-icon" />
          </a>
          <div className="sidebar-icon-words">Wiki</div>
        </div>
      </header>
    </div>
  );
}

