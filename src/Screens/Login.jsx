import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { auth } from './FirebaseConfig';

const Login = () => {

  const navigate = useNavigate();

  const [checkForm, setCheckForm] = useState({
    email: '',
    password: '',
  })

  const handleCheck = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, checkForm.email, checkForm.password)
    .then((res) => {
        alert('Login Successfully..')
        navigate('/home', {replace: true})
    })
    .catch((err) => console.log(err))
        
  }

  return (
    <div className="login">
        <div className='Login-box'>
            <form action="" className='login-form'>
            <h1>Login</h1>
                <input  onChange={(e)=> setCheckForm({...checkForm, email:e.target.value})}  type="email" required placeholder='Enter email' />
                <input  onChange={(e)=> setCheckForm({...checkForm, password:e.target.value})}  type="password" required placeholder='Enter password' />
                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: 14}}>
                    <span><input type="checkbox" name="" id="" /> Remember me</span>
                    <span><a href="#">Forgot password?</a></span>
                </div>
                <button onClick={handleCheck}>Login</button>
                <span>Don't have account? <Link to='/signUp'>Register</Link></span>
            </form>
        </div>
    </div>
  )
}

export default Login
