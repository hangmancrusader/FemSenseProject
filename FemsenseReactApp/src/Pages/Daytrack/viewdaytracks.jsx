import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
const Viewdaytrack = () => {
  const [dayTracks, setDayTracks] = useState([]);

  useEffect(() => {
    // Fetch daytracks from the backend
    const fetchDayTracks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/daytracker/'); // Replace with your backend API endpoint
        setDayTracks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDayTracks();
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', marginBottom: '1rem',fontFamily: "Avenir Next" }}>
        DayTrack 
      </Typography>

      {dayTracks.length > 0 ? (
        <List>
          {dayTracks.map(dayTrack => (
            <ListItem key={dayTrack._id}>
             <ListItemText primary={`Date: ${new Date(dayTrack.date).toLocaleDateString("en-GB")}`}/>
              <ListItemText primary={`Water Amount: ${dayTrack.water_amount}`} />
              <ListItemText primary={`Weight: ${dayTrack.weight}`} />
              <ListItemText primary={`Sleep: ${dayTrack.Sleep || 'N/A'}`} />
              <ListItemText primary={`Body Temperature: ${dayTrack.BodyTemp || 'N/A'}`} />
              
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1">
          No daytrack information available.
        </Typography>
      )}
    </Container>
  );
};

export default Viewdaytrack;
