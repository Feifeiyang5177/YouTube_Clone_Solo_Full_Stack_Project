import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch} from "react-icons/ai";


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

      <div>
        <Link to="/videos"></Link>
      </div>
     
       <div>{display}</div>
    </header>
   
  )
}
