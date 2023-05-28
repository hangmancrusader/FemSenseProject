import { Typography } from "@mui/material";
import Calendar from "../Component/Calendar";
import ButtonLogout from '../Component/ButtonLogout';
import Navbar from '../Component/Navbar';
import ReactMenu from '../Component/Lib'
import Library from '../Pages/Library'
import BlogsButton from '../Component/BlogsButton'
const PeriodTracker = () => {
  return (
    <div>
      {/* <Library/> */}
      <BlogsButton/>
      <ButtonLogout />
      {/* <ReactMenu/> */}
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
