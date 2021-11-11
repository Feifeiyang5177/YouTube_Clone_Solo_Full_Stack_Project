
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch} from "react-icons/ai";
import {AiOutlineMenu} from "react-icons/ai";
import {BiVideoPlus} from "react-icons/bi";

export default ({ currentUser, logout }) => {
const display = currentUser ? (
    <div >
      <button className='button' onClick={logout}>Sign out</button>
    </div>
  ) : (
    <div className='link-bar'>
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Sign In</Link>
    </div>
  );

  return ( 
    <div>
        <header className="nav-bar">

          
         

          <div className='yatube-logo'>
          <AiOutlineMenu className='menu-icon' />
            <h1 className="logo">
                <Link className="ya" to='/videos'>Y a</Link>
                <Link className="tube" to="/videos">Tube</Link>
            </h1>
          </div>


          <div className='search-and-create-icon'>
              <div className='search-bar'>
                <input className='search-input'
                    type='text'
                    placeholder='Search'/>
                    <AiOutlineSearch className='search-icon' />    
              </div>
              <BiVideoPlus className="create-video-icon"/>  
          </div>
          
          

        
          <div>{display}</div>

        </header>

    </div>
   
  )
}
