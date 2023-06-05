import React, { useState } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function CheckboxComponent({ onChange }) {
  const [checked, setChecked] = useState([]);

  const handleChangePads = (event) => {
    const updatedChecked = [
      event.target.checked,
      checked[1],
      checked[2],
      checked[3]
    ];
    setChecked(updatedChecked);
    onChange(updatedChecked);
  };

  const handleChangeTampons = (event) => {
    const updatedChecked = [
      checked[0],
      event.target.checked,
      checked[2],
      checked[3]
    ];
    setChecked(updatedChecked);
    onChange(updatedChecked);
  };

  const handleChangeMenstrualCup = (event) => {
    const updatedChecked = [
      checked[0],
      checked[1],
      event.target.checked,
      checked[3]
    ];
    setChecked(updatedChecked);
    onChange(updatedChecked);
  };

  const handleChangeNoAnswer = (event) => {
    const updatedChecked = [
      checked[0],
      checked[1],
      checked[2],
      event.target.checked
    ];
    setChecked(updatedChecked);
    onChange(updatedChecked);
  };

  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column", ml: "3px" }}>
        <FormControlLabel
          label="Pads"
          control={
            <Checkbox
              checked={checked[0]}
              onChange={handleChangePads}
              sx={{
                color: "#dda0ad",
                "&.Mui-checked": {
                  color: "#aa717e"
                }
              }}
            />
          }
        />
        <FormControlLabel
          label="Tampons"
          control={
            <Checkbox
              checked={checked[1]}
              onChange={handleChangeTampons}
              sx={{
                color: "#dda0ad",
                "&.Mui-checked": {
                  color: "#aa717e"
                }
              }}
            />
          }
        />
        <FormControlLabel
          label="Menstrual cups"
          control={
            <Checkbox
              checked={checked[2]}
              onChange={handleChangeMenstrualCup}
              sx={{
                color: "#dda0ad",
                "&.Mui-checked": {
                  color: "#aa717e"
                }
              }}
            />
          }
        />
        <FormControlLabel
          label="Prefer not to answer"
          control={
            <Checkbox
              checked={checked[3]}
              onChange={handleChangeNoAnswer}
              sx={{
                color: "#dda0ad",
                "&.Mui-checked": {
                  color: "#aa717e"
                }
              }}
            />
          }
        />
      </Box>
    </div>
  );
}
