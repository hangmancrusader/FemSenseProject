import React, { useState } from "react";
import { Box, Typography, Button, TextareaAutosize } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const PostNotes = () => {
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();
  const generateUniqueID = () => {
    return Math.floor(Math.random() * 1000000) + 1;
  };
  
  const sendToBackend = async () => {
    const uniqueID = generateUniqueID();
    const NotesData = {
      notesId: uniqueID,
      description: notes
    };
    console.log(NotesData);

    try {
      const response = await axios.post('http://localhost:3000/notes/', NotesData);
      console.log(response.data.id);
      navigate(`http://localhost:3001/getnotes/${response.data.id}`);
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
        height: '50vh'
      }}
    >
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '1rem', fontFamily: "Avenir Next" }}>Notes</Typography>
          
      <TextareaAutosize
        placeholder="Enter your notes"
        value={notes}
        onChange={(event) => setNotes(event.target.value)}
        rows={5}
        sx={{
          width: '300px',
          padding: '0.5rem',
          borderRadius: '10px',
          border: '1px solid gray',
          resize: 'vertical',
          fontFamily: 'Avenir Next',
          fontSize: '1rem'
        }}
      />
        
      <Button
        variant="contained"
        sx={{ backgroundColor: 'white', color: '#C46471', m: 1, fontFamily: "Avenir Next" }}
        onClick={sendToBackend}
      >
        Okay
      </Button>
    </Box>
  );
};

export default PostNotes;
