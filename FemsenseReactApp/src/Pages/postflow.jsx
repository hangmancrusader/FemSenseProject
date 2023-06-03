import React, { useState } from "react";
import { Select,  MenuItem, Box, Typography, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const PostFlow = () => {
  const [flow, setFlow] = useState("");
  const navigate = useNavigate();
  const generateUniqueID = () => {
    // Generate a unique number for reminderID
    return Math.floor(Math.random() * 1000000) + 1;
  };
  
  const sendFlowToBackend = async(event) => {
    const uniqueID = generateUniqueID();
    const flowData = {
        menstrualflowID: uniqueID,
        description:flow
      };
    console.log(flowData);

    //integerate API
    axios
    .post('http://localhost:3000/menstrualflow/', flowData)
    .then(response => {
       // Assuming the ID is included in the response
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
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '1rem',fontFamily: "Avenir Next" }}>Flow</Typography>
          
        <Select label="" value={flow} sx={{ textAlign: 'center', marginBottom: '1rem',fontFamily: "Avenir Next", width: '200px' }}
        onChange={(event) => setFlow(event.target.value)}
        >     
        <MenuItem value="heavy">heavy</MenuItem>    
        <MenuItem value="light">light</MenuItem>    
        <MenuItem value="medium">medium</MenuItem>    
        <MenuItem value="clots">clots</MenuItem>    
        <MenuItem value="jelly">jelly</MenuItem> 
        <MenuItem value="spotting">spotting</MenuItem>    
            
         
        </Select>  
        
        <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1,fontFamily: "Avenir Next" }} onClick={sendFlowToBackend}>Okay</Button>
        
        </Box>
    
  );
};

export default PostFlow;
