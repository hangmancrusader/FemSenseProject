import React, { useState } from "react";
import { Select,  MenuItem, Box, Typography, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const PostPA = () => {
  const [PA, setPA] = useState([]);
  const navigate = useNavigate();
  const generateUniqueID = () => {
    // Generate a unique number for reminderID
    return Math.floor(Math.random() * 1000000) + 1;
  };
  
  const sendtoBackend = async(event) => {
    const uniqueID = generateUniqueID();
    const PAData = {
        physicalactivityId: uniqueID,
        description:PA
      };
    console.log(PAData);

    //integerate API
    axios
    .post('http://localhost:3000/physicalactivity/', PAData)
    .then(response => {
       // Assuming the ID is included in the response
      console.log(response.data.id);
      navigate(`http://localhost:3001/getPA/${response.data.activityId}`);
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
    <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '1rem',fontFamily: "Avenir Next" }}>Physical Activity</Typography>
          
        <Select
            label=""
            value={PA}
            multiple
            sx={{
                width: '200px',
                textAlign: 'center',
                marginBottom: '1rem',
                fontFamily: 'Avenir Next'
            }}
            onChange={(event) => setPA(event.target.value)}
            >
            <MenuItem value="gym">gym</MenuItem>
            <MenuItem value="running">running</MenuItem>
            <MenuItem value="dancing">dancing</MenuItem>
            <MenuItem value="swimming">swimming</MenuItem>
            <MenuItem value="cycling">cycling</MenuItem>
            <MenuItem value="meditation">meditation</MenuItem>
            <MenuItem value="no exercise">no exercise</MenuItem>
            
            
     
            
         
        </Select> 
        
        <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1,fontFamily: "Avenir Next" }} onClick={sendtoBackend}>Okay</Button>
        
        </Box>
    
  );
};

export default PostPA;
