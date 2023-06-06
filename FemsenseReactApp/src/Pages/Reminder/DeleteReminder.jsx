import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link component from React Router

const DeleteReminder = () => {
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
        Reminders 
      </Typography>

      {reminders.length > 0 ? (
        <List>
          {reminders.map(reminder => (
            <Link to={`/deletedreminder/${reminder.reminderID}`} key={reminder._id} style={{ textDecoration: 'none' }}>
              <ListItem>
                <ListItemText primary={`Date: ${new Date(reminder.remindertime).toLocaleDateString("en-GB")}`} />
                <ListItemText primary={`Frequency: ${reminder.frequency}`} />
                <ListItemText primary={`Medicine: ${reminder.medicine}`} />
              </ListItem>
            </Link>
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

export default DeleteReminder;
