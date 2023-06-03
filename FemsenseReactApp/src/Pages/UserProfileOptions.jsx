import * as React from 'react';
import { Button, Typography}  from '@mui/material';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';


const UserProfileOptions = () => {
    return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '120vh'
          }}
        >
          <Box sx={{ marginBottom: '2rem' }}>
          <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '1rem',fontFamily: "Avenir Next" }}>Symptoms</Typography>
            <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1 }} component={Link} to="/symptoms/view">View Symptoms</Button>
            <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1 }} component={Link} to="/postsymp">Add Symptoms</Button>
            <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1 }} component={Link} to="/symptoms/delete">Delete Symptoms</Button>
          </Box>
          <Box sx={{ marginBottom: '2rem' }}>
          <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '1rem',fontFamily: "Avenir Next" }}>Moods</Typography>
            <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1 }} component={Link} to="/moods/view">View Moods</Button>
            <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1 }} component={Link} to="/postmoods">Add Moods</Button>
            <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1 }} component={Link} to="/moods/delete">Delete Moods</Button>
          </Box>
          <Box sx={{ marginBottom: '2rem' }}>
          <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '1rem',fontFamily: "Avenir Next" }}>Physical Activity</Typography>
            <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1 }} component={Link} to="/PA/view">View Activity</Button>
            <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1 }} component={Link} to="/postPA">Add Activity</Button>
            <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1 }} component={Link} to="/PA/delete">Delete Activity</Button>
          </Box>
          <Box sx={{ marginBottom: '2rem' }}>
          <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '1rem',fontFamily: "Avenir Next" }}>Flow</Typography>
            <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1 }} component={Link} to="/flow/view">View Notes</Button>
            <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1 }} component={Link} to="/postflow">Add Notes</Button>
            <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1 }} component={Link} to="/notes/delete">Delete Notes</Button>
          </Box>
          <Box sx={{ marginBottom: '2rem' }}>
          <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '1rem',fontFamily: "Avenir Next" }}>Notes</Typography>
            <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1 }} component={Link} to="/notes/view">View Flow</Button>
            <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1 }} component={Link} to="/postnotes">Add Flow</Button>
            <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1 }} component={Link} to="/notes/delete">Delete Flow</Button>
          </Box>
          <Box sx={{ marginBottom: '2rem' }}>
          <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '1rem',fontFamily: "Avenir Next" }}>Period</Typography>
            <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1 }} component={Link} to="/getperiod">View Period</Button>
            <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1 }} component={Link} to="/logperiod">Log Period</Button>
            <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1 }} component={Link} to="/deleteperiod">Delete Period</Button>
          </Box>
        </Box>
    );
  };

  export default UserProfileOptions;