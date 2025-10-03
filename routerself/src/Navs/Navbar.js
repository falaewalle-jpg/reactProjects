import React from 'react'
import { Link , NavLink} from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <NavLink to="/" style={({isActive }) => ({ color: isActive ? "black" : "orange"})}>Home</NavLink> | 
      <NavLink to= "/about" style={({isActive }) => ({ color: isActive ? "black" : "orange"})}>About</NavLink> | 
      <NavLink to="/contact" style={({isActive }) => ({ color: isActive ? "black" : "orange"})}>Contact</NavLink>
    </nav>
  )
}

export default Navbar