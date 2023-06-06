import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const DeletedReminders = () => {
    const { remID } = useParams();
    const [reminderID, setreminderID] = useState(remID);
//to get reminder object to delete
  useEffect(() => {
    const fetchreminderdata = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/medicinereminder/${reminderID}`);
        const { data } = response;
        console.log(data);
       
        
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchreminderdata();
  }, [reminderID]);
  
  //daytrack handler
  const deletereminder = () => {
    axios
      .delete(`http://localhost:3000/medicinereminder/${reminderID}`)
      .then(() => {
        console.log('Reminder deleted successfully');
        window.alert('Reminder deleted successfully');
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
    <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '1rem',fontFamily: "Avenir Next" }}>Delete Reminder?</Typography>
    <Button variant="contained"sx={{ backgroundColor: 'white', color: '#C46471', m: 1, fontFamily: "Avenir Next" }} type="submit" onClick={deletereminder} >
        Yes
    </Button>
    <Button variant="contained"sx={{ backgroundColor: 'white', color: '#C46471', m: 1, fontFamily: "Avenir Next" }} type="submit" component={Link} to="/deletereminders" >
        No
    </Button>
</Box>
  );
};

export default DeletedReminders;
