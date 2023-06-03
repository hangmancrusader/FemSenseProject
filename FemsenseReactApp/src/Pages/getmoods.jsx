import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import axios from "axios";

const MoodPage = () => {
  const [mood, setMood] = useState(null);

  useEffect(() => {
    // Fetch mood data from backend API
    axios
      .get("http://localhost:3000/moodtracker/123") // Replace with your API endpoint
      .then((response) => {
        setMood(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {mood ? (
        <div>
          <Typography variant="h4">Mood ID: {mood.moodId}</Typography>
          <Typography variant="h6">Description: {mood.description}</Typography>
        </div>
      ) : (
        <Typography variant="h5">Loading...</Typography>
      )}
    </Box>
  );
};

export default MoodPage;
