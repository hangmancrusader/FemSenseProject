import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box, Grid, Select, FormHelperText } from '@mui/material';
import axios from 'axios';
const ReminderForm = () => {
    const [medicine, setMedicine] = useState([]);
    const [frequency, setFrequency] = useState([]);
    const [reminderTime, setReminderTime] = useState('');
    
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const uniqueID = generateUniqueID(); // Generate a unique number for reminderID
      const reminderData = {
        userId: localStorage.getItem('userid'), // Retrieve the user ID from local storage
        medicine: medicine,
        reminderID: uniqueID,
        frequency: frequency,
        remindertime: reminderTime
      };
  
      console.log(reminderData); // Log the reminder data
  
      // Send the reminder data to your backend API endpoint using Axios
      axios
        .post('http://localhost:3000/medicinereminder/', reminderData)
        .then((response) => {
          console.log('Reminder added successfully:', response.data);
          // Clear the form fields
          setMedicine([]);
          setFrequency([]);
          setReminderTime('');
        })
        .catch((error) => {
          console.error('Error adding reminder:', error);
        });
    };
  
    const generateUniqueID = () => {
      // Generate a unique number for reminderID
      return Math.floor(Math.random() * 1000000) + 1;
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
        height: '60vh'
      }}>
      <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Medicine"
            value={medicine}
            onChange={(event) => setMedicine(event.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            required
            sx={{fontFamily: "Avenir Next"  }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Date"
            type="date"
            value={reminderTime}
            onChange={(e) => setReminderTime(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            required
            sx={{ textAlign: 'center', marginBottom: '1rem',fontFamily: "Avenir Next", }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select label="Frequency" value={frequency} 
          sx={{ textAlign: 'center', marginBottom: '1rem',fontFamily: "Avenir Next", width: '200px' }}
          onChange={(event) => setFrequency(event.target.value)}
          multiple
          >   
          <MenuItem value="Monday">Monday</MenuItem>
          <MenuItem value="Tuesday">Tuesday</MenuItem>
          <MenuItem value="Wednesday">Wednesday</MenuItem>
          <MenuItem value="Thursday">Thursday</MenuItem>
          <MenuItem value="Friday">Friday</MenuItem>
          <MenuItem value="Saturday">Saturday</MenuItem>
          <MenuItem value="Sunday">Sunday</MenuItem>
        </Select>
        <FormHelperText>Please select days from list</FormHelperText>
      </Grid>
    </Grid>
      <Button variant="contained"sx={{ backgroundColor: 'white', color: '#C46471', m: 1, fontFamily:"Avenir Next" }} type="submit" >
        Submit
      </Button>
    </form>
</Box>
  );
};

export default ReminderForm;
