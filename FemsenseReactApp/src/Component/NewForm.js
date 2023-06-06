import { FormControl } from "@mui/material";
import { Box, Stack, createTheme } from "@mui/material";
import Button from "@mui/material/Button";
import RadioButton from "./SurveyComponents/RadioButton";
import Select from "./SurveyComponents/Select";
import Slider from "./SurveyComponents/Slider";
import Checkbox from "./SurveyComponents/Checkbox";
import RadioTwo from "./SurveyComponents/RadioTwo";
import Combobox from "./SurveyComponents/Combobox";
import RadioThree from "./SurveyComponents/RadioThree";
import RadioFour from "./SurveyComponents/RadioFour";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as React from "react";
import axios from 'axios';

const NewForm = () => {
  const [activePage, setActivePage] = useState(1);
  const navigate = useNavigate();
  const [selectedValueradio, setSelectedValueradio] = useState("");
  const [selectedValue, setSelectedValue] = React.useState("");
  const [selectedProduct, setSelectedProduct] = React.useState([]);
  const [flowValue, setFlowValue] = useState(0);
  const [pmsValue, setPmsValue] = useState("");
  const [moodValue, setMoodValue] = useState(null);
  const [birthControl, setBirthControl] = useState(null);
  const [reproductiveDisorders, setReproductiveDisorders] = useState(null);

  const handleReproductiveDisordersChange = (event) => {
    setReproductiveDisorders(event.target.value);
  };

  const handleBirthControlChange = (event) => {
    setBirthControl(event.target.value);
  };


  const handleComboBoxChange = (event, newValue) => {
    setMoodValue(newValue);
  };

  const handleRadioChange = (event) => {
    setPmsValue(event.target.value);
  };

  const handleSliderChange = (event, newValue) => {
    setFlowValue(newValue);
  };

  const handleCheckboxChange = (selected) => {
    setSelectedProduct(selected);
  };

  const handleSelectedValue = (value) => {
    setSelectedValue(value);
    console.log("Selected Value get:", value);
  };
  const handleMaybeLater = () => {
    navigate("/signup");
  };
  return (
    <div>
      {activePage === 1 && (
        <>
          <Box
            display={"flex"}
            flexDirection={"column"}
            textAlign={("center", "justify")}
            alignItems={"center"}
            sx={{
              boxShadow: "25px",
              p: "20px",
              margin: "20px",
              border: "10px",
              borderColor: "black",
              borderRadius: "25px",
              width: "400px",
              height: "400px",
              color: "#aa717e",
              backgroundColor: "#e9dadb",
              fontFamily: "Open Sans",
              position: "absolute",
              top: "50px",
              left: "150px",
              marginTop: "100px",
              marginLeft: "400px",
              fontSize: "20px",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <p>
              We would like to get to know you a little better so that we can
              make a more accurate assessment. Would you be willing to answer a
              few questions? It won't take long!
            </p>
            <Stack direction="column">
              <Button
                variant="contained"
                size="small"
                flexDirection="column"
                onClick={() => {
                  setActivePage(2);
                }}
                sx={{
                  color: "#ffffff",
                  backgroundColor: "#dda0ad",
                  fontWeight: "bold",
                  padding: "20px",
                  margin: "5px",
                  height: "10px",
                  width: "200px",
                  buttonShadow: "10px",
                  fontFamily: "Open Sans",
                  "&:hover": { backgroundColor: "#aa717e" },
                  textTransform: "none",
                  fontSize: "18px",
                }}
              >
                Let's do it!
              </Button>

              <Button
                variant="contained"
                size="small"
                flexDirection="column"
                onClick={handleMaybeLater}
                sx={{
                  color: "#ffffff",
                  backgroundColor: "#dda0ad",
                  fontWeight: "bold",
                  padding: "20px",
                  margin: "5px",
                  height: "10px",
                  width: "200px",
                  buttonShadow: "10px",
                  fontFamily: "Open Sans",
                  "&:hover": { backgroundColor: "#aa717e" },
                  textTransform: "none",
                  fontSize: "18px",
                }}
              >
                Maybe later!
              </Button>
            </Stack>
          </Box>
        </>
      )}
      {activePage === 2 && (
        <>
          <Box
            display={"flex"}
            flexDirection={"column"}
            textAlign={("center", "justify")}
            alignItems={"center"}
            sx={{
              boxShadow: "25px",
              p: "20px",
              margin: "20px",
              border: "10px",
              borderColor: "black",
              borderRadius: "25px",
              width: "400px",
              height: "400px",
              color: "#aa717e",
              backgroundColor: "#e9dadb",
              fontFamily: "Open Sans",
              position: "absolute",
              top: "50px",
              left: "150px",
              marginTop: "100px",
              marginLeft: "400px",
              fontSize: "20px",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <h3>Do you track your period?</h3>
            <RadioButton setSelectedValueradio={setSelectedValueradio} />
           
          </Box>
        </>
      )}
      {activePage === 3 && (
        <>
          <Box
            display={"flex"}
            flexDirection={"column"}
            textAlign={("center", "justify")}
            alignItems={"center"}
            sx={{
              boxShadow: "25px",
              p: "20px",
              margin: "20px",
              border: "10px",
              borderColor: "black",
              borderRadius: "25px",
              width: "400px",
              height: "400px",
              color: "#aa717e",
              backgroundColor: "#e9dadb",
              fontFamily: "Open Sans",
              position: "absolute",
              top: "50px",
              left: "150px",
              marginTop: "100px",
              marginLeft: "400px",
              fontSize: "20px",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            {" "}
            <h3>What is your cycle length?</h3>
            <Select setSelectedValue={handleSelectedValue} />
          </Box>
        </>
      )}
      {activePage === 4 && (
        <>
          <Box
            display={"flex"}
            flexDirection={"column"}
            textAlign={("center", "justify")}
            alignItems={"center"}
            sx={{
              boxShadow: "25px",
              p: "20px",
              margin: "20px",
              border: "10px",
              borderColor: "black",
              borderRadius: "25px",
              width: "400px",
              height: "400px",
              color: "#aa717e",
              backgroundColor: "#e9dadb",
              fontFamily: "Open Sans",
              position: "absolute",
              top: "50px",
              left: "150px",
              marginTop: "100px",
              marginLeft: "400px",
              fontSize: "20px",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            {" "}
            <h3>Which period product do you use?</h3>
            <Checkbox onChange={handleCheckboxChange} />
          </Box>
        </>
      )}
      {activePage === 5 && (
        <>
          <Box
            display={"flex"}
            flexDirection={"column"}
            textAlign={("center", "justify")}
            alignItems={"center"}
            sx={{
              boxShadow: "25px",
              p: "20px",
              margin: "20px",
              border: "10px",
              borderColor: "black",
              borderRadius: "25px",
              width: "400px",
              height: "400px",
              color: "#aa717e",
              backgroundColor: "#e9dadb",
              fontFamily: "Open Sans",
              position: "absolute",
              top: "50px",
              left: "150px",
              marginTop: "100px",
              marginLeft: "400px",
              fontSize: "20px",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            {" "}
            <h3>How would you describe your flow?</h3>
            <Slider  value={flowValue} onChange={handleSliderChange} />
          </Box>
        </>
      )}
      {activePage === 6 && (
        <>
          <Box
            display={"flex"}
            flexDirection={"column"}
            textAlign={("center", "justify")}
            alignItems={"center"}
            sx={{
              boxShadow: "25px",
              p: "20px",
              margin: "20px",
              border: "10px",
              borderColor: "black",
              borderRadius: "25px",
              width: "400px",
              height: "400px",
              color: "#aa717e",
              backgroundColor: "#e9dadb",
              fontFamily: "Open Sans",
              position: "absolute",
              top: "50px",
              left: "150px",
              marginTop: "100px",
              marginLeft: "400px",
              fontSize: "20px",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            {" "}
            <h3>Is it easy for you to cope with PMS symptoms? </h3>
            <RadioTwo value={pmsValue} onChange={handleRadioChange} />
          </Box>
        </>
      )}
      {activePage === 7 && (
        <>
          <Box
            display={"flex"}
            flexDirection={"column"}
            textAlign={("center", "justify")}
            alignItems={"center"}
            sx={{
              boxShadow: "25px",
              p: "20px",
              margin: "20px",
              border: "10px",
              borderColor: "black",
              borderRadius: "25px",
              width: "400px",
              height: "400px",
              color: "#aa717e",
              backgroundColor: "#e9dadb",
              fontFamily: "Open Sans",
              position: "absolute",
              top: "50px",
              left: "150px",
              marginTop: "100px",
              marginLeft: "400px",
              fontSize: "20px",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            {" "}
            <h3> Do you have mood swings on your period? </h3>
            <Combobox  value={moodValue} onChange={handleComboBoxChange}  />
          </Box>
        </>
      )}
      {activePage === 8 && (
        <>
          <Box
            display={"flex"}
            flexDirection={"column"}
            textAlign={("center", "justify")}
            alignItems={"center"}
            sx={{
              boxShadow: "25px",
              p: "20px",
              margin: "20px",
              border: "10px",
              borderColor: "black",
              borderRadius: "25px",
              width: "400px",
              height: "400px",
              color: "#aa717e",
              backgroundColor: "#e9dadb",
              fontFamily: "Open Sans",
              position: "absolute",
              top: "50px",
              left: "150px",
              marginTop: "100px",
              marginLeft: "400px",
              fontSize: "20px",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            {" "}
            <h3>Are you on birth control now?</h3>
            <RadioThree value={birthControl} onChange={handleBirthControlChange} />
          </Box>
        </>
      )}
      {activePage === 9 && (
        <>
          <Box
            display={"flex"}
            flexDirection={"column"}
            textAlign={("center", "justify")}
            alignItems={"center"}
            sx={{
              boxShadow: "25px",
              p: "20px",
              margin: "20px",
              border: "10px",
              borderColor: "black",
              borderRadius: "25px",
              width: "400px",
              height: "400px",
              color: "#aa717e",
              backgroundColor: "#e9dadb",
              fontFamily: "Open Sans",
              position: "absolute",
              top: "50px",
              left: "150px",
              marginTop: "100px",
              marginLeft: "400px",
              fontSize: "20px",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <h3>
              Do you have any reproductive health disorders (endometriosis,
              PCOS, etc)?{" "}
            </h3>
            <RadioFour  value={reproductiveDisorders}
        onChange={handleReproductiveDisordersChange} />
          </Box>
        </>
      )}

      {activePage > 1 && (
        <Button
          variant="contained"
          size="small"
          flexDirection="row"
          onClick={() => {
            setActivePage(activePage - 1);
          }}
          sx={{
            color: "#ffffff",
            backgroundColor: "#dda0ad",
            fontWeight: "bold",
            padding: "20px",
            margin: "5px",
            height: "10px",
            width: "80px",
            buttonShadow: "10px",
            fontFamily: "Open Sans",
            "&:hover": { backgroundColor: "#aa717e" },
            textTransform: "none",
            fontSize: "15px",
            top: "50px",
            left: "140px",
            marginTop: "400px",
            marginLeft: "430px",
          }}
        >
          {" "}
          Previous{" "}
        </Button>
      )}
      {activePage < 9 && activePage > 1 && (
        <Button
          variant="contained"
          size="small"
          flexDirection="row"
          onClick={() => {
            setActivePage(activePage + 1);
          }}
          sx={{
            color: "#ffffff",
            backgroundColor: "#dda0ad",
            fontWeight: "bold",
            padding: "20px",
            margin: "5px",
            height: "10px",
            width: "80px",
            buttonShadow: "10px",
            fontFamily: "Open Sans",
            "&:hover": { backgroundColor: "#aa717e" },
            textTransform: "none",
            fontSize: "15px",
            top: "50px",
            left: "160px",
            marginTop: "400px",
            marginLeft: "215px",
          }}
        >
          Next
        </Button>
      )}
      {activePage > 8 && (
       <Button
       variant="contained"
       size="small"
       flexDirection="row"
       onClick={async () => {
         try {
           // Retrieve userId from local storage
           const userId = localStorage.getItem('userid');
     
           // Check if userId exists
           if (!userId) {
             console.error('User ID not found');
             return;
           }
     
           // Call the POST API to save user preferences
           await axios.post('http://localhost:3000/userpreference/user-preference', {
             userId: userId,
             selectedValue: selectedValue,
             selectedProduct: selectedProduct,
             flowValue: flowValue,
             pmsValue: pmsValue,
             moodValue: moodValue,
             birthControl: birthControl,
             reproductiveDisorders: reproductiveDisorders
           });
     
           // Redirect to the tracker page
           window.location.href = "/periodtracker";
         } catch (error) {
           console.error("Error saving user preferences:", error);
         }
       }}
       sx={{
         color: "#ffffff",
         backgroundColor: "#dda0ad",
         fontWeight: "bold",
         padding: "20px",
         margin: "5px",
         height: "10px",
         width: "80px",
         buttonShadow: "10px",
         fontFamily: "Open Sans",
         "&:hover": { backgroundColor: "#aa717e" },
         textTransform: "none",
         fontSize: "15px",
         top: "50px",
         left: "160px",
         marginTop: "400px",
         marginLeft: "215px",
       }}
     >
       Finish
     </Button>
      )}
    </div>
  );
};

export default NewForm;
