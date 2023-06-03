import React, { useState } from "react";
import { Select,  MenuItem, FormHelperText, Box, Typography, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const PostMoods = () => {
  const [mood, setMood] = useState("");
  const navigate = useNavigate();
  const generateUniqueID = () => {
    // Generate a unique number for reminderID
    return Math.floor(Math.random() * 1000000) + 1;
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
      const newmoodId = response.data.moodId; // Assuming the ID is included in the response
      console.log(response.data.id);
      navigate(`http://localhost:3001/getmoods/${response.data.id}`);
    })
    .catch(error => {
      console.error(error);
    });
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
        height: '50vh'
      }}>
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '1rem',fontFamily: "Avenir Next" }}>Moods</Typography>
          
        <Select label="" value={mood} sx={{ textAlign: 'center', marginBottom: '1rem',fontFamily: "Avenir Next" }}
        onChange={(event) => setMood(event.target.value)}
        >     
        <MenuItem value="calm">calm</MenuItem>    
        <MenuItem value="happy">happy</MenuItem>    
        <MenuItem value="energetic">enegertic</MenuItem>    
        <MenuItem value="irritated">irritated</MenuItem>    
        <MenuItem value="depressed">depressed</MenuItem> 
        <MenuItem value="anxious">anxious</MenuItem>    
        <MenuItem value="confused">confused</MenuItem>    
        <MenuItem value="sad">sad</MenuItem>    
         
        </Select>  
        <FormHelperText sx={{ textAlign: 'center', marginBottom: '1rem',fontFamily: "Avenir Next" }}> How are you feeling? </FormHelperText>
        <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1,fontFamily: "Avenir Next" }} onClick={sendMoodToBackend}>Okay</Button>
        
        </Box>
    
  );
};

export default PostMoods;
