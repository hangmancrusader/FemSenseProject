import React, { useState } from "react";
import { Select,  MenuItem, Box, Typography, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const PostSymp = () => {
  const [symp, setSymp] = useState([]);
  const navigate = useNavigate();
  const generateUniqueID = () => {
    // Generate a unique number for reminderID
    return Math.floor(Math.random() * 1000000) + 1;
  };
  
  const sendtoBackend = async(event) => {
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
      console.log(response.data.id);
      navigate(`http://localhost:3001/getmoods/${response.data.symptomId}`);
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
    <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '1rem',fontFamily: "Avenir Next" }}>Symptoms</Typography>
          
        <Select
            label=""
            value={symp}
            multiple
            sx={{
                width: '200px',
                textAlign: 'center',
                marginBottom: '1rem',
                fontFamily: 'Avenir Next'
            }}
            onChange={(event) => setSymp(event.target.value)}
            >
            <MenuItem value="everything is fine">everything is fine</MenuItem>
            <MenuItem value="cramps">cramps</MenuItem>
            <MenuItem value="headache">headache</MenuItem>
            <MenuItem value="acne">acne</MenuItem>
            <MenuItem value="cravings">cravings</MenuItem>
            <MenuItem value="insomnia">insomnia</MenuItem>
            <MenuItem value="bloating">bloating</MenuItem>
            <MenuItem value="nausea">nausea</MenuItem>
            <MenuItem value="abdominal pain">abdominal pain</MenuItem>
            <MenuItem value="fatigue">fatigue</MenuItem>
     
            
         
        </Select> 
        
        <Button variant="contained" sx={{ backgroundColor: 'white', color: '#C46471', m: 1,fontFamily: "Avenir Next" }} onClick={sendtoBackend}>Okay</Button>
        
        </Box>
    
  );
};

export default PostSymp;
