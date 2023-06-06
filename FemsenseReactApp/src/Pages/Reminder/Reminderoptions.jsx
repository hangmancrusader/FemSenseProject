//page to view, add, delete reminders option
import * as React from 'react';
import { Button}  from '@mui/material';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

const ReminderOptions = () => {
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
      }}
    >
        <Button variant="contained"sx={{ backgroundColor: 'white', color: '#C46471', m: 1, fontFamily: "Avenir Next" }} component={Link} to="/viewreminders"  >View Reminders</Button>
        <Button variant="contained"sx={{ backgroundColor: 'white', color: '#C46471', m: 1, fontFamily: "Avenir Next" }} component={Link} to="/reminders"  >Add Reminder</Button>
        <Button variant="contained"sx={{ backgroundColor: 'white', color: '#C46471', m: 1, fontFamily: "Avenir Next"}} component={Link} to="/deletereminders"  >Delete Remminders</Button>
      
    </Box> 
    );
  };

  export default ReminderOptions;