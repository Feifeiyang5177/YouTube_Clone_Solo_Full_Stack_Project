
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch} from "react-icons/ai";
import {AiOutlineMenu} from "react-icons/ai";
// import {BiVideoPlus} from "react-icons/bi";

export default ({ currentUser, logout }) => {
const display = currentUser ? (
    <div >
      <button onClick={logout}>Sign out</button>
    </div>
  ) : (
    <div className='link-bar'>
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Log In</Link>
    </div>
  );

  return (
    
    <header className="nav-bar">

      <AiOutlineMenu style={{ marginLeft: 5,  width: 40, height: 25 }} />
      {/* <BiVideoPlus className="create-video-sign"/> */}

      <div className='yatube-logo'>
        <h1 className="logo">
            <Link className="ya" to='/'>Y a</Link>
            <Link className="tube" to="/">Tube</Link>
        </h1>
      </div>

      <div className='search-bar'>
        <input className='search-input'
            type='text'
            placeholder='Search'/>
            <AiOutlineSearch style={{ marginRight: 25, width: 30, height: 25 }} />   
      </div>

    
       <div>{display}</div>

    </header>
   
  )
}

// <div style={{ display: "flex", alignItems: "center"}} ></div>