import React from 'react'
import './navbar.css';
function navbar() {
  return (
   <>
   <nav className='navbar'>
      <ul>
      <li>
          <span> PY WEB-APP </span>
        </li>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li className="nav-button">Login</li>
        <li className="nav-button">Sign Up</li>
      </ul>
    </nav>
    </>
  )
}

export default navbar