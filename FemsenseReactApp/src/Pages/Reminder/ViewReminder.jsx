import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const ViewReminder = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    // Fetch daytracks from the backend
    const fetchReminders = async () => {
      try {
        const userId = localStorage.getItem('userid'); // Retrieve the user ID from local storage
        const response = await axios.get(`http://localhost:3000/medicinereminder/${userId}`);
        setReminders(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchReminders();
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', marginBottom: '1rem', fontFamily: "Avenir Next" }}>
        DayTrack 
      </Typography>

      {reminders.length > 0 ? (
        <List>
          {reminders.map(reminder => (
            <ListItem key={reminder._id}>
              <ListItemText primary={`Date: ${new Date(reminder.remindertime).toLocaleDateString("en-GB")}`} />
              <ListItemText primary={`Frequency: ${reminder.frequency}`} />
              <ListItemText primary={`Medicine: ${reminder.medicine}`} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '1rem', fontFamily: "Avenir Next" }}>
          No reminder information available.
        </Typography>
      )}
    </Container>
  );
};

export default ViewReminder;
