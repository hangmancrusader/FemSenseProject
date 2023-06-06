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
            
            <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1 }} component={Link} to="/postsymp">Add Symptoms</Button>
            
          </Box>
          <Box sx={{ marginBottom: '2rem' }}>
          <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '1rem',fontFamily: "Avenir Next" }}>Moods</Typography>
            
            <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1 }} component={Link} to="/postmoods">Add Moods</Button>
            
          </Box>
          
          <Box sx={{ marginBottom: '2rem' }}>
          <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '1rem',fontFamily: "Avenir Next" }}>Flow</Typography>
            
            <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1 }} component={Link} to="/postflow">Add Notes</Button>
            
          </Box>
          <Box sx={{ marginBottom: '2rem' }}>
          <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '1rem',fontFamily: "Avenir Next" }}>Notes</Typography>
            
            <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1 }} component={Link} to="/postnotes">Add Flow</Button>
            
          </Box>
          <Box sx={{ marginBottom: '2rem' }}>
          <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '1rem',fontFamily: "Avenir Next" }}>Physical Activity</Typography>
            
            <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1 , marginLeft: '4rem'}} component={Link} to="/postPA">Add Activity</Button>
           
          </Box>
          
        </Box>
    );
  };

  export default UserProfileOptions;