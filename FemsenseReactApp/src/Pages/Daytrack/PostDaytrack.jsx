import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Grid,MenuItem,Select,Typography } from '@mui/material';
import Box from '@mui/material/Box';

const Postdaytrack = () => {
  
  const [userID, setUserID] = useState('');
  const [date, setDate]= useState('');
  const [waterAmount, setWaterAmount] = useState(0);
  const [weight, setWeight] = useState(0);
  const [sleep, setSleep] = useState(0)
  const [BodyTemp, setBodyTemp] = useState(35.2)
  const [symp, setSymp] = useState([]);
  const [Symptoms, setSympid] = useState('')
  const [mood, setMood] = useState("");
  const [Mood, setMoodid]= useState('')
  
  const generateUniqueID = () => {
    // Generate a unique number for reminderID
    return Math.floor(Math.random() * 1000000) + 1;
  };
  //to store the symptom mongo id needed to populate daytrack symptom
  //symptom handler
  const sendSymptoBackend = async(event) => {
    const uniqueID = generateUniqueID();
    const SympData = {
        symptomId: uniqueID,
        description:symp
      };
    console.log(SympData);

    //integerate API
    axios
    .post('http://localhost:3000/symptoms/', SympData)
    .then(response => {
       // Assuming the ID is included in the response
      const resmongoid=response.data.mongoID
      console.log(response.data.symptomId);
      console.log(resmongoid);
      localStorage.setItem('SymptomID',resmongoid)
      ;//symtomId is the name field to be extracted
    })
    .catch(error => {
      console.error(error);
    });
 };

 const sendMoodToBackend = async(event) => {
  const uniqueID = generateUniqueID();
  const moodData = {
      moodId: uniqueID,
      description:mood
    };
  console.log(moodData);
  
  //integerate API
  axios
  .post('http://localhost:3000/moodtracker/', moodData)
  .then(response => {
     // Assuming the ID is included in the response
    const mongoID = response.data.mongoID;
    console.log(response.data.id);
    console.log(mongoID);
    localStorage.setItem('MoodID',response.data.mongoID)
    
  })
  .catch(error => {
    console.error(error);
  });
};

  useEffect(() => {
    // Retrieve userID from local storage and set it in state
    const storedUserID = localStorage.getItem('userid');
    setUserID(storedUserID);
  }, []);
  useEffect(() => {
    // Retrieve symptom ID from local storage and set it in state
    const sympID = localStorage.getItem('SymptomID');
    setSympid(sympID);
  }, []);
  useEffect(() => {
    // Retrieve mood ID from local storage and set it in state
    const moodID = localStorage.getItem('MoodID');
    setMoodid(moodID);
  }, []);

  //daytrack handler
  const submitForm = async (e) => {
    e.preventDefault();

       
      const daytrackdata = {
        userID, date,
        water_amount: waterAmount,
        weight, sleep, BodyTemp, Symptoms, Mood
      }

      console.log(daytrackdata); // Display the newly created daytrack object
      axios
      .post('http://localhost:3000/daytracker/addtrack', daytrackdata)
      .then(response => {
         console.log(daytrackdata); 
      })
      .catch(error => {
        console.error(error);
      });
      // Reset form fields after successful submission
      setDate('');
      setWaterAmount(0);
      setWeight(0);
      setSleep(0);
      setBodyTemp(35.2);
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
    <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '1rem',fontFamily: "Avenir Next" }}>Add Daytrack</Typography>
    <form onSubmit={submitForm}> 
      <Grid container spacing={2}>
        
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
        <Grid item xs={12} sm={6}>
        <TextField
              select
              label="Symptom"
              value={symp}
              onChange={(e) => setSymp(e.target.value)}
              fullWidth
              required
            >
              <MenuItem value="everything is fine">Everything is fine</MenuItem>
              <MenuItem value="cramps">Cramps</MenuItem>
              <MenuItem value="headache">Headache</MenuItem>
              <MenuItem value="tender breasts">Tender Breasts</MenuItem>
              <MenuItem value="acne">Acne</MenuItem>
              <MenuItem value="cravings">Cravings</MenuItem>
              <MenuItem value="insomnia">Insomnia</MenuItem>
              <MenuItem value="bloating">Bloating</MenuItem>
              <MenuItem value="constipation">Constipation</MenuItem>
              <MenuItem value="nausea">Nausea</MenuItem>
              <MenuItem value="abdominal pain">Abdominal Pain</MenuItem>
              <MenuItem value="fatigue">Fatigue</MenuItem>
              <MenuItem value="diarrhea">Diarrhea</MenuItem>
            </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
              select
              label="Mood"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              fullWidth
              required
            >
              <MenuItem value="calm">calm</MenuItem>    
              <MenuItem value="happy">happy</MenuItem>    
              <MenuItem value="energetic">enegertic</MenuItem>    
              <MenuItem value="irritated">irritated</MenuItem>    
              <MenuItem value="depressed">depressed</MenuItem> 
              <MenuItem value="anxious">anxious</MenuItem>    
              <MenuItem value="confused">confused</MenuItem>    
              <MenuItem value="sad">sad</MenuItem>
            </TextField>
        </Grid>
        
      </Grid>
      <Button variant="contained"sx={{ backgroundColor: 'white', color: '#C46471', m: 1, fontFamily: "Avenir Next" }} type="submit" onClick={() => {
        sendSymptoBackend();
        sendMoodToBackend();}} >
        Submit
      </Button>
    </form>
</Box>
  );
};

export default Postdaytrack;
