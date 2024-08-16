import { Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const CreateUser = () => {
  const [createData, setCreateData] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3030/users", createData)
      .then((res) => alert("user create successfully"))
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Paper elevation={24} sx={{ margin: 20, padding: 5 }}>
        <Typography variant="h4" sx={{ marginBottom: 5 }}>
          Create User
        </Typography>
        <TextField
          onChange={(e) =>
            setCreateData({ ...createData, name: e.target.value })
          }
          sx={{ mb: 3 }}
          fullWidth
          label="Full Name"
        />
        <TextField
          onChange={(e) =>
            setCreateData({ ...createData, username: e.target.value })
          }
          sx={{ mb: 3 }}
          fullWidth
          label="Username"
        />
        <TextField
          onChange={(e) =>
            setCreateData({ ...createData, email: e.target.value })
          }
          sx={{ mb: 3 }}
          fullWidth
          label="Email"
        />
        <TextField
          onChange={(e) =>
            setCreateData({ ...createData, phone: e.target.value })
          }
          sx={{ mb: 3 }}
          fullWidth
          label="Phone"
        />

        <Button variant="contained" type="submit">
          Create
        </Button>
      </Paper>
    </form>
  );
};

export default CreateUser;