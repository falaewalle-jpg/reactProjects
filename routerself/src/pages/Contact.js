import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Contact() {
  return (
    <div>
        <div>Contact ways</div>
        <div>
        <NavLink to="mobile" style={({isActive }) => ({ color: isActive ? "black" : "orange"})}>Mobile</NavLink> | 
        <NavLink to= "email" style={({isActive }) => ({ color: isActive ? "black" : "orange"})}>Email</NavLink> | 
        <NavLink to="linkedin" style={({isActive }) => ({ color: isActive ? "black" : "orange"})}>LinkedIn</NavLink>
        <Outlet/>
        </div>
    </div>
  )
}

export default Contact