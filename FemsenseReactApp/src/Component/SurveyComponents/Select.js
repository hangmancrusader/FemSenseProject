import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ setSelectedValue }) {
  const [period, setPeriod] = React.useState("");

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setPeriod(selectedValue);
    setSelectedValue(selectedValue);
  };

  return (
    <Box
      sx={{
        width: "240px",
      }}
    >
      <FormControl fullWidth>
        <InputLabel
          sx={{
            color: "#dda0ad",
            "&.Mui-checked": {
              color: "#aa717e",
            },
          }}
          id="demo-simple-select-label"
        >
          Period Length
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={period}
          label="Period length"
          onChange={handleChange}
        >
          <MenuItem
            sx={{
              color: "#dda0ad",
              "&.Mui-checked": {
                color: "#aa717e",
              },
            }}
            value={"21 - 27"}
          >
            21 - 27 days cycle
          </MenuItem>
          <MenuItem
            sx={{
              color: "#dda0ad",
              "&.Mui-checked": {
                color: "#aa717e",
              },
            }}
            value={"28 - 35"}
          >
            28 - 35 days cycle
          </MenuItem>
          <MenuItem
            sx={{
              color: "#dda0ad",
              "&.Mui-checked": {
                color: "#aa717e",
              },
            }}
            value={"36 - 40"}
          >
            36 - 40 days cycle
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
