import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButton({ setSelectedValueradio }) {
  const handleChange = (event) => {
    const selectedValueradio = event.target.value;
    const selectedLabel = event.target.labels[0].textContent;
    setSelectedValueradio(selectedLabel);
    console.log("Selected Value:", selectedLabel);
  };

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">
        Do you track your period?
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue=""
        name="radio-buttons-group"
        onChange={handleChange}
      >
        <FormControlLabel
          value="Yes"
          control={<Radio />}
          label="Yes, I track my period regularly."
        />
        <FormControlLabel
          value="No"
          control={<Radio />}
          label="No, I didn't think I needed to."
        />
        <FormControlLabel
          value="Other"
          control={<Radio />}
          label="I hadn't thought about it."
        />
      </RadioGroup>
    </FormControl>
  );
}

