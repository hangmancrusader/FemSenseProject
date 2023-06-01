import { Typography } from "@mui/material";
import Calendar from "../Component/Calendar";
import ButtonLogout from '../Component/ButtonLogout';
import Navbar from '../Component/Navbar';
import ReactMenu from '../Component/Lib'
import Library from '../Pages/Library'
import BlogsButton from '../Component/BlogsButton'
import SideBar from "../Component/TrackerComponent/SideBarNav2";
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
          top: "90px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "30px",
          fontWeight: "bold",
          textAlign: "center",
          color: "#aa717e",
          zIndex: 10,
        }}
       /* sx={{
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
      ...*/
      >
          Let's track your period!
      </Typography>
      
      <Calendar />
      <SideBar />
    </div>
  );
};
export default PeriodTracker;
