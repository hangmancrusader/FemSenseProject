import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Grid,MenuItem,Select,Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const DeleteUser = () => {
    const { id } = useParams();
    const [userid, setUserid] = useState(id);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/profile/${userid}`);
        const { data } = response;
        console.log(data);
       
        
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchUserData();
  }, [userid]);
  

  const deleteuser = () => {
    axios
      .delete(`http://localhost:3000/user/deleteuser/${userid}`)
      .then(() => {
        console.log('user deleted successfully');
        window.alert('User deleted successfully');
         // Navigate to home page or any other route after deletion
      })
      .catch((error) => {
        console.error(error);
      });
  };  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
        justifyContent: 'center',
        height: '100vh'
      }}>
    <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '1rem',fontFamily: "Avenir Next" }}>Delete User?</Typography>
    <Button variant="contained"sx={{ backgroundColor: 'white', color: '#C46471', m: 1, fontFamily: "Avenir Next" }} type="submit" onClick={deleteuser} >
        Yes
    </Button>
    <Button variant="contained"sx={{ backgroundColor: 'white', color: '#C46471', m: 1, fontFamily: "Avenir Next" }} type="submit" component={Link} to="/selectuser" >
        No
    </Button>
</Box>
  );
};

export default DeleteUser;
