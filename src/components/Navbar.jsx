import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Navbar() {
  return (
    <nav style={{display:'flex',justifyContent:'space-between',padding:'25px 100px'}}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/message">message</NavLink>
        <NavLink to="/bookmark">bookmark</NavLink>
        <NavLink to="/profile">Profile</NavLink>
    </nav>
  )
}
