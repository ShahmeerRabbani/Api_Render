import { GithubAuthProvider, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { auth } from './FirebaseConfig';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleCheck = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
     alert('login successfully..')
        navigate('/home', {replace: true})
    })
    .catch((err) => console.log(err))
        
  }

  const handleGoogle = () => {
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res)
      navigate('/home')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const handleGithub = () => {
    const provider = new GithubAuthProvider()

    signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res)
      navigate('/home')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const handleReset = () => {
    sendPasswordResetEmail(auth, email)
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  return (
    <div className="login">
        <div className='Login-box'>
            <form action="" className='login-form'>
            <h1>Login</h1>
                <input onChange={(e) => setEmail(e.target.value)} type="email" required placeholder='Enter email' />
                <input onChange={(e) => setPassword(e.target.value)} type="password" required placeholder='Enter password' />
                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: 14}}>
                    <span><input type="checkbox" name="" id="" /> Remember me</span>
                    <span><a href="#"  onClick={handleReset}>Forgot password?</a></span>

                </div>
                <button onClick={handleCheck}>Login</button>
                <p>Login with</p>
                <div className="social-login">
                  <button onClick={handleGoogle}> <FcGoogle /> </button>
                  <button onClick={handleGithub}><FaGithub /></button>
                </div>
                <span>Don't have account? <Link to='/signUp'>Register</Link></span>
            </form>
        </div>
    </div>
  )
}

export default Login
