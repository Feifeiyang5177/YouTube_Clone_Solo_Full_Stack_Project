import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { Link } from 'react-router-dom';

export const MenuBarData = [
  {
    title: "Home",
    path: <Link to="/signup"></Link>,
    icon: <RiIcons.RiHomeGearFill />,
    cName: "m-nav-text",
  },

  {
    title: "Reports",
    path: "/",
    icon: <IoIcons.IoIosPaper />,
    cName: "m-nav-text",
  },

  {
    title: "Products",
    path: "/",
    icon: <FaIcons.FaCartPlus />,
    cName: "m-nav-text",
  },

  {
    title: "Team",
    path: "/",
    icon: <IoIcons.IoMdPeople />,
    cName: "m-nav-text",
  },

  {
    title: "Messages",
    path: "/",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "m-nav-text",
  },

  {
    title: "Support",
    path: "/",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "m-nav-text",
  },
];