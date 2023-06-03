import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { set } from 'mongoose';
const Postdaytrack = () => {
  const [userID, setUserID] = useState('');
  const [date, setDate]= useState('');
  const [waterAmount, setWaterAmount] = useState(0);
  const [weight, setWeight] = useState(0);
  const [sleep, setSleep] = useState(0)
  const [BodyTemp, setBodyTemp] = useState(35.2)
  

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/addtrack', {
        userID, date,
        water_amount: waterAmount,
        weight, sleep, BodyTemp
      });

      console.log(response.data); // Display the newly created daytrack object

      // Reset form fields after successful submission
      setUserID('');
      setDate('');
      setWaterAmount(0);
      setWeight(0);
      setSleep(0);
      setBodyTemp(35.2);
      // Reset other form fields here
    } catch (error) {
      console.error(error);
    }
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
    
    <form onSubmit={submitForm}> ADD to DayTrack
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="User ID"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Water Amount"
            value={waterAmount}
            onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value >= 0 || e.target.value === "") {
                  setWaterAmount(value);
                }
            }}
            type="number"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Weight"
            value={weight}
            onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value >= 0 || e.target.value === "") {
                  setWeight(value);
                }
            }}
            type="number"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Sleep"
            value={sleep}
            onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value >= 0 || e.target.value === "") {
                  setSleep(value);
                }
            }}
            type="number"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Body Temp"
            value={BodyTemp}
            onChange={(e) => {
                const value = parseFloat(e.target.value);
                if (value === "" || (!isNaN(value) && value >= 35 && value <= 42)) {
                  setBodyTemp(value);
                }
              }}
            type="number"
            fullWidth
            required
            helperText="°C"
          />
        </Grid>
      </Grid>
      <Button variant="contained"sx={{ backgroundColor: 'white', color: '#C46471', m: 1 }} type="submit" >
        Submit
      </Button>
    </form>
</Box>
  );
};

export default Postdaytrack;
