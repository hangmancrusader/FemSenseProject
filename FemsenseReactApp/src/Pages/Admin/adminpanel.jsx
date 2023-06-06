import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

const Adminpanel = () => {
  const [users, setUsers] = useState([]);
  const [jwt, setjwtToken] = useState('')
  useEffect (()=>{
    const jwt = localStorage.getItem('jwt');
    setjwtToken(jwt)
  }, [])
  useEffect(() => {
    // Fetch all users from the backend
    const fetchAllUsers = async () => { 
    const config = {
        headers: {
        Authorization: `Bearer ${jwt}`,
        },
    };
      try {
        const response = await axios.get('http://localhost:3000/user/allusers', config);
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllUsers();
  }, [jwt]);

  return (
    <Container>
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', marginBottom: '1rem', fontFamily: "Avenir Next" }}>
        All Users
      </Typography>

      {users.length > 0 ? (
        <List>
          {users.map(user => (
            <ListItem key={user.userid}>
              <ListItemText primary={`Username: ${user.username}`} />
              <ListItemText primary={`Email: ${user.email}`} />
              <ListItemText primary={`Phone Number: ${user.phonenumber}`} />
              <ListItemText primary={`Date of Birth: ${user.dob}`} />
              <ListItemText primary={`Role ID: ${user.roleid}`} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1">
          No user information available.
        </Typography>
      )}
    </Container>
  );
};

export default Adminpanel;
