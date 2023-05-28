import { Typography } from "@mui/material";
import Calendar from "../Component/Calendar";
import ButtonLogout from '../Component/ButtonLogout';
const PeriodTracker = () => {
  return (
    <div>
      <ButtonLogout />
      <Typography
        sx={{
          fontFamily: "Open Sans",
          position: "absolute",
          top: "50px",
          left: "120px",
          marginTop: "10px",
          marginLeft: "450px",
          fontSize: "30px",
          fontWeight: "bold",
          fontStyle: "justfied",
          color: "#aa717e",
        }}
      >
        Let's track your period!
      </Typography>
      <Calendar />
    </div>
  );
};
export default PeriodTracker;
