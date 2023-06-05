import * as React from 'react';
import { Button}  from '@mui/material';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

const DayTrackOptions = () => {
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
        <Button variant="contained"sx={{ backgroundColor: 'white', color: '#C46471', m: 1, fontFamily: "Avenir Next" }} component={Link} to="/viewdaytrack"  >View Daytrack</Button>
        <Button variant="contained"sx={{ backgroundColor: 'white', color: '#C46471', m: 1, fontFamily: "Avenir Next" }} component={Link} to="/postdaytrack"  >Add Daytrack</Button>
        <Button variant="contained"sx={{ backgroundColor: 'white', color: '#C46471', m: 1, fontFamily: "Avenir Next"}} component={Link} to="/updatedaytrack"  >Edit Daytack</Button>
        <Button variant="contained"sx={{ backgroundColor: 'white', color: '#C46471', m: 1, fontFamily: "Avenir Next"}} component={Link} to="/deletedaytrack"  >Delete Daytrack</Button>
      
    </Box> 
    );
  };

  export default DayTrackOptions;