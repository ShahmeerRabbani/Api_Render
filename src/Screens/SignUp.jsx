import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'
import { auth } from './FirebaseConfig'

const SignUp = () => {

  const navigate = useNavigate()

  let [registration, setRegistration] = useState({
    name: '',
    email: '',
    password: '',
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    
    createUserWithEmailAndPassword(auth, registration.email, registration.password)
    .then((res) =>{
        alert('Sign Up Successfully..')
        navigate('/')
    })
    .catch((err) => console.log(err))
  }




  return (
    <div className='sign-up'>
      <div className='signUp-box'>
            <form action="#" className='signUp-form'>
            <h1 style={{color:'white'}}>Sign Up</h1>
                <input value={registration.name} type="text" required placeholder='Enter your name' onChange={(e)=> setRegistration({...registration, name:e.target.value})}/>
                <input value={registration.email} type="email" required placeholder='Enter email' onChange={(e)=> setRegistration({...registration, email:e.target.value})}/>
                <input value={registration.password} type="password" required placeholder='Create password' onChange={(e)=> setRegistration({...registration, password:e.target.value})}/>
                <button onClick={handleSubmit}>Sign Up</button>
                <span>Already have account? <Link to='/'>Login</Link></span>
            </form>
        </div>
    </div>
  )
}

export default SignUp
