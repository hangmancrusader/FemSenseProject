import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Grid,MenuItem,Select,Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Deletedaytrack = () => {
    const { id } = useParams();
    const [daytrackID, setDaytrackID] = useState(id);
//to get daytrack object for patch
  useEffect(() => {
    const fetchDaytrackData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/daytracker/${daytrackID}`);
        const { data } = response;
        console.log(data);
       
        
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchDaytrackData();
  }, [daytrackID]);
  
  //daytrack handler
  const deleteDaytrack = () => {
    axios
      .delete(`http://localhost:3000/daytracker/${daytrackID}`)
      .then(() => {
        console.log('Daytrack deleted successfully');
        window.alert('Daytrack deleted successfully');
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
    <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '1rem',fontFamily: "Avenir Next" }}>Delete Daytrack?</Typography>
    <Button variant="contained"sx={{ backgroundColor: 'white', color: '#C46471', m: 1, fontFamily: "Avenir Next" }} type="submit" onClick={deleteDaytrack} >
        Yes
    </Button>
    <Button variant="contained"sx={{ backgroundColor: 'white', color: '#C46471', m: 1, fontFamily: "Avenir Next" }} type="submit" component={Link} to="/deletedaytrack" >
        No
    </Button>
</Box>
  );
};

export default Deletedaytrack;
