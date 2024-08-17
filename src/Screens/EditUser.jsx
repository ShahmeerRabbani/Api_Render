import { Button, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditUserInfo = () => {

    const {id} = useParams()
    const [editUser, setEditUser] = useState([])

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
            console.log(response.data)
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
        onChange={(e) => setEditUser({...editUser, name:e.target.value})}
          sx={{ mb: 3 }}
          fullWidth
        />
        <TextField
        onChange={(e) => setEditUser({...editUser, userName:e.target.value})}
          sx={{ mb: 3 }}
          fullWidth
        />
        <TextField
        onChange={(e) => setEditUser({...editUser, email:e.target.value})}
          sx={{ mb: 3 }}
          fullWidth
        />
        <TextField
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
