import React from "react";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

export default function RadioButtonsGroup({ value, onChange }) {
  const handleChange = (event) => {
    onChange(event);
  };

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">
        Please select an option:
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={value}
        onChange={handleChange}
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="Yes"
          control={
            <Radio
              sx={{
                color: "#dda0ad",
                "&.Mui-checked": {
                  color: "#aa717e",
                },
              }}
            />
          }
          label="Yes"
        />
        <FormControlLabel
          value="No"
          control={
            <Radio
              sx={{
                color: "#dda0ad",
                "&.Mui-checked": {
                  color: "#aa717e",
                },
              }}
            />
          }
          label="No"
        />
        <FormControlLabel
          value="Other"
          control={
            <Radio
              sx={{
                color: "#dda0ad",
                "&.Mui-checked": {
                  color: "#aa717e",
                },
              }}
            />
          }
          label="Prefer not to answer"
        />
      </RadioGroup>
    </FormControl>
  );
}
