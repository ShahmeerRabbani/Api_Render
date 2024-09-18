import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import React, { useState } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'
import { auth, db } from './FirebaseConfig'
import { addDoc, collection } from 'firebase/firestore'

const SignUp = () => {

  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((res) =>{
      sendEmailVerification(auth.currentUser)
      .then((res) => {
        console.log('email is verified')
      })
        alert('Sign Up Successfully..')
        userDataBase()
        navigate('/')
    })
    .catch((err) => console.log(err))
  }

  const userObj = {
    name,
    lastName,
    email,
  }


  const userDataBase = async() => {
    try {
    const addUser = await addDoc(collection(db, "userData"), userObj)
      
    } catch (error) {
      alert(err)
    }
  }


  return (
    <div className='sign-up'>
      <div className='signUp-box'>
            <form action="#" className='signUp-form'>
            <h1 style={{color:'white'}}>Sign Up</h1>
                <input value={name} type="text" required placeholder='Enter your First Name' onChange={(e)=> setName(e.target.value)}/>
                <input value={lastName} type="text" required placeholder='Enter your Last Name' onChange={(e)=> setLastName(e.target.value)}/>
                <input value={email} type="email" required placeholder='Enter email' onChange={(e)=> setEmail(e.target.value)}/>
                <input value={password} type="password" required placeholder='Create password' onChange={(e)=> setPassword(e.target.value)}/>
                <button onClick={handleSubmit}>Sign Up</button>
                <span>Already have account? <Link to='/'>Login</Link></span>
            </form>
        </div>
    </div>
  )
}

export default SignUp
