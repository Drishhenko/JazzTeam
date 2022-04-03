import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './navBar.css'

const NavBar = () => {
const navigate = useNavigate()

  return (
    <div className='nav-bar'>
        <div className='container nav'>
            <ul>
                <li><NavLink to='/'>Main</NavLink></li>
                <li><NavLink to='/info'>Info</NavLink></li>
                <li><NavLink to='/profile'>Profile</NavLink></li> 
            </ul>
            <button className='log' onClick={() => navigate('/login')}>login</button>
        </div>
    </div>
  )
}

export default NavBar
