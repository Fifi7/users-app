import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';

function UsersList() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8080/api/users/getAll')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={user.id}>
            Id: {user.id}<br />
            Name: {user.name}<br />
            Surname: {user.surname}<br />
            City: {user.city}<br />
            Email: {user.email}<br />
            Age: {user.age}<br />
          </Paper>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
