import React, { useState }  from 'react'
import { useNavigate } from 'react-router-dom'
import './loginPage.css'

const LoginPage = ({setIsAuth}) => {
  const navigate = useNavigate()
  const user = {
    username: 'Admin',
    password: '12345678'
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginCheck = () => {
        if (!username === user.username) {
          alert('User is not found')
        } else if(!password === user.password) {
            alert('Incorrect password')
        } else {
          localStorage.setItem('isAuth', true)
          setIsAuth(localStorage.getItem('isAuth'))
          navigate('/profile')
        }
  }

  return (
    <div className='container'>
      <div className='login-form'>
        <h1>Login using username and password</h1>
        <p></p>
        <input placeholder='login' value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <input placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} type='password'></input>
        <button className='login' onClick={() => loginCheck()}>login</button>
      </div>
    </div>
  )
}

export default LoginPage
