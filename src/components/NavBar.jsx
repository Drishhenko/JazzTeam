import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './navBar.css'

const NavBar = ({isAuth, setIsAuth}) => {
const navigate = useNavigate()

const logOut = () => {
  localStorage.setItem('isAuth', false)
  setIsAuth(JSON.parse(localStorage.getItem('isAuth')))
}
console.log(isAuth);
  return (
    <div className='nav-bar'>
        <div className='container nav'>
            <ul>
                <li><NavLink to='/'>Main</NavLink></li>
                <li><NavLink to='/info'>Info</NavLink></li>
                <li>{isAuth? (<NavLink to='/profile'>Profile</NavLink>): (<NavLink to='/login'>Profile</NavLink>)}</li> 
            </ul>
            {isAuth? 
            ( <button className='log' onClick={() => logOut() }> Log out</button>)
            :
            (<button className='log' onClick={() => navigate('/login')}> Login</button>)}
        </div>
    </div>
  )
}

export default NavBar
