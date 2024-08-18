import { Button, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditUserInfo = () => {

    const {id} = useParams()
    const [editUser, setEditUser] = useState({
      name: '',
      username: '',
      email: '',
      phone: '',
    })
    const navigate = useNavigate()

    useEffect(()=> {
        axios.get("http://localhost:3000/users/" + id)
        .then((response) => {
            setEditUser(response.data)
        })
        .catch((error) => console.log(error))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put("http://localhost:3000/users/" + id, editUser)
        .then((response) => {
            alert('user Updated Successfully..')
            navigate('/home')
        })
        .catch((error) => console.log(error))
    }

  return (
    <>
     <form onSubmit={handleSubmit}>
      <Paper elevation={24} sx={{ margin: 20, padding: 5 }}>
        <Typography variant="h4" sx={{ marginBottom: 5 }}>
          Edit User
        </Typography>
        <TextField
         name="name"
        value={editUser.name}
        onChange={(e) => setEditUser({...editUser, name:e.target.value})}
          sx={{ mb: 3 }}
          fullWidth
        />
        <TextField
         name="username"
        value={editUser.username}
        onChange={(e) => setEditUser({...editUser, username:e.target.value})}
          sx={{ mb: 3 }}
          fullWidth
        />
        <TextField
         name="email"
        value={editUser.email}
        onChange={(e) => setEditUser({...editUser, email:e.target.value})}
          sx={{ mb: 3 }}
          fullWidth
        />
        <TextField
         name="phone"
        value={editUser.phone}
        onChange={(e) => setEditUser({...editUser, phone:e.target.value})}
          sx={{ mb: 3 }}
          fullWidth
        />

        <Button variant="contained" type="submit">
          Edit
        </Button>
      </Paper>
    </form>
    </>
  )
}

export default EditUserInfo
