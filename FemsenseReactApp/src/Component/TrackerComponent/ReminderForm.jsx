import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box } from '@mui/material';
import axios from 'axios';
const ReminderForm = () => {
    const [medicine, setMedicine] = useState([]);
    const [frequency, setFrequency] = useState([]);
    const [reminderTime, setReminderTime] = useState('');
    const [reminderID, setReminderID] = useState(null);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const uniqueID = generateUniqueID(); // Generate a unique number for reminderID
      const reminderData = {
        medicine: [medicine],
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
    <form onSubmit={handleSubmit}>
      <Box display="flex" alignItems="center">
        <TextField
          label="Medicine"
          value={medicine}
          onChange={(event) => setMedicine(event.target.value)}
        />
        <TextField
          label="Reminder Time"
          value={reminderTime}
          onChange={(event) => setReminderTime(event.target.value)}
          sx={{ marginLeft: '1rem' }}
        />
        <Button type="submit" variant="contained" sx={{ marginLeft: '1rem' }}>
          Add Reminder
        </Button>
      </Box>
      <TextField
        fullWidth label="Frequency" id="fullWidth"
        value={frequency}
        onChange={(event) => setFrequency(event.target.value)}
        select
        SelectProps={{
          multiple: true,
        }}
        sx={{ marginTop: '1rem' }}
      >
        <MenuItem value="Monday">Monday</MenuItem>
        <MenuItem value="Tuesday">Tuesday</MenuItem>
        <MenuItem value="Wednesday">Wednesday</MenuItem>
        <MenuItem value="Thursday">Thursday</MenuItem>
        <MenuItem value="Friday">Friday</MenuItem>
        <MenuItem value="Saturday">Saturday</MenuItem>
        <MenuItem value="Sunday">Sunday</MenuItem>
      </TextField>
    </form>
  );
};

export default ReminderForm;
