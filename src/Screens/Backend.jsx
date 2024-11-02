import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Backend = () => {

    // const [data, setData] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const obj = {
      firstName,
      lastName,
      email,
      password,
    }

    const handleClick =async () => {
     await axios.post('http://localhost:1900/SignUp', obj)
      .then((res) => {
        console.log(res)
      })
    .catch((err) => {console.log(err)})
    }

    
    const handleGetData = () => {
      axios.get('http://localhost:1900/getSign')
      .then((response) => {
        console.log(response.data)
      })
      .catch((err) => {console.log(err)})
    }
  return (
    <div style={{display: 'flex', flexDirection: "column", gap: '20px'}}>
      <h1>Backend</h1>
      <TextField onChange={(e) => setFirstName(e.target.value)} sx={{width: 300}} label='First Name'/>
      <TextField onChange={(e) => setLastName(e.target.value)} sx={{width: 300}} label='Last Name'/>
      <TextField onChange={(e) => setEmail(e.target.value)} sx={{width: 300}} type='email' label='Email'/>
      <TextField onChange={(e) => setPassword(e.target.value)} sx={{width: 300}} type='password' label='password'/>
      <Button sx={{width: 100}} variant='contained' onClick={handleClick}>Submit</Button>
      <Button sx={{width: 100}} variant='contained' onClick={handleGetData}>Get Data</Button>
    </div>
  )
}

export default Backend
