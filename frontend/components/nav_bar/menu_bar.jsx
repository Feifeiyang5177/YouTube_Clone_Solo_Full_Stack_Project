import React, {useState} from "react";
import { Link } from "react-router-dom";
import { RiHomeGearFill } from "react-icons/ri";
// import * as FcIcons from "react-icons/fc";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from "react-icons/ai";
import * as FcIcons from  "react-icons/fc";
import {GrInternetExplorer} from 'react-icons/gr';
// VscRemoteExplorer;
import {MenuBarData} from './menu_bar_data';
import {IconContext} from 'react-icons'
import * as RiIcons from "react-icons/ri";


function MenuBar() {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
      <div className="m-side-nav-bar">
        <IconContext.Provider value={{ color: "black", size: "25px" }}>
          <div className="m-navbar">
            <div className="m-navbar-icon">
              <Link className="m-menu-bars">
                <AiIcons.AiOutlineMenu
                  className="m-menu-icon"
                  onClick={showSidebar}
                />
              </Link>
            </div>
          </div>

          <div className={sidebar ? "m-nav-menu-active" : "m-nav-menu"}>
            <nav className="m-side-bar-content" onClick={showSidebar}>
              <div className="m-side-bar-title-and-icon">
                <div className="m-side-bar-text">
                  <Link className="m-side-bar-link" to="/">
                    <FcIcons.FcHome className="m-icons" />
                    <span>Home</span>
                  </Link>
                </div>
              </div>
              <div className="m-side-bar-title-and-icon">
                <div className="m-side-bar-text">
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    className="m-side-bar-link"
                  >
                    <FcIcons.FcStart className="m-icons" />
                    <span>Explore</span>
                  </a>
                </div>
              </div>
              <div className="m-side-bar-title-and-icon">
                <div className="m-side-bar-text">
                  <Link className="m-side-bar-link" to="/login">
                    <FcIcons.FcVideoCall className="m-icons" />
                    <span>Live</span>
                  </Link>
                </div>
              </div>
            </nav>

            <nav className="m-side-bar-content-2">
              <div className="m-side-bar-title-and-icon">
                <div className="m-side-bar-text">
                  <a
                    href="https://feifeiyang5177.github.io/Hiper_the_sound_reader_app/"
                    target="_blank"
                    className="m-side-bar-link"
                  >
                    <FcIcons.FcMusic className="m-icons" />
                    <span>Hiper App</span>
                  </a>
                </div>
              </div>

              <div className="m-side-bar-title-and-icon">
                <div className="m-side-bar-text">
                  <a
                    href="https://mern-around-the-block.herokuapp.com/#/"
                    target="_blank"
                    className="m-side-bar-link"
                  >
                    <FcIcons.FcCollaboration className="m-icons" />
                    <span>Around The Block App</span>
                  </a>
                </div>
              </div>

              <div className="m-side-bar-title-and-icon">
                <div className="m-side-bar-text">
                  <a
                    href="https://www.linkedin.com/in/feifei-yang-6990bb38/"
                    target="_blank"
                    className="m-side-bar-link"
                  >
                    <FcIcons.FcFinePrint className="m-icons" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="m-side-bar-title-and-icon">
                <div className="m-side-bar-text">
                  <a
                    href="https://feifeiyang-swe.com/"
                    target="_blank"
                    className="m-side-bar-link"
                  >
                    <FcIcons.FcOnlineSupport className="m-icons" />
                    <span>About</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </IconContext.Provider>
      </div>
    );
}

export default MenuBar;

