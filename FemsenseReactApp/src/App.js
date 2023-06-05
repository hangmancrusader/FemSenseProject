import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NewPageSurvey from "./Pages/NewPageSurvey";
import UserReg from "./Pages/UserReg";
import PeriodTracker from "./Pages/PeriodTracker";
import Login from "./Pages/Login";
import Library from "./Pages/Library";
import Contact from "./Pages/Contact";
import Homepage from "./Pages/Homepage";
import Rating from "./Pages/Rating";
import Reminder from "./Pages/Reminder"

//Daytrack routes
import DayTrackOptions from "./Pages/Daytrack/daytrackoptions";
import Postdaytrack from "./Pages/Daytrack/PostDaytrack";
import Viewdaytrack from "./Pages/Daytrack/viewdaytracks";
import Updatedaytrack from "./Pages/Daytrack/updatedaytrack";
import Patchdaytrack from "./Pages/Daytrack/patchdaytrack";
import Viewanddeletedaytrack from "./Pages/Daytrack/viewanddeletedaytrack"
import Deletedaytrack from "./Pages/Daytrack/deletedaytrack";

//Tracker Routes
import UserProfileOptions from "./Pages/UserProfileOptions";
import PostMoods from "./Pages/postmood";
import PostFlow from "./Pages/postflow";
import PostSymp from "./Pages/postsymptoms";
import PostPA from "./Pages/postPA";
import PostNotes from "./Pages/postnotes";
import MoodPage from "./Pages/getmoods";

//adminpanel
import UserProfile from "./Pages/getuser";


const App = () => (
  <Routes>
    <Route path="/survey" element={<NewPageSurvey />} />
    <Route path="/signup" element={<UserReg />} />
    <Route path="/periodtracker" element={<PeriodTracker />} />
    <Route path="/login" element={<Login />} />
    <Route path="/health" element={<Library />} />
    <Route path="/contactus" element={<Contact />} />
    <Route path="/homepage" element={<Homepage />} />
    <Route path="/rateus" element={<Rating />} />
    <Route path="/reminders" element={<Reminder/>} />

    <Route path="/daytrackoptions" element={<DayTrackOptions/>} />
    <Route path="/postdaytrack"  element={<Postdaytrack/>} />
    <Route path="/viewdaytrack"  element={<Viewdaytrack/>} />
    <Route path="/updatedaytrack"  element={<Updatedaytrack/>} />
    <Route path="/updatedaytrack/patchdaytrack/:id" element={<Patchdaytrack />} />
    <Route path="/deletedaytrack" element={<Viewanddeletedaytrack />} />
    <Route path="/deletedaytrack/deleted/:id" element={<Deletedaytrack />} />

    <Route path="/userprofile"  element={<UserProfileOptions/>} />
    <Route path="/postmoods"  element={<PostMoods/>} />
    <Route path="/postflow"  element={<PostFlow/>} />
    <Route path="/postsymp"  element={<PostSymp/>} />
    <Route path="/postPA"  element={<PostPA/>} />
    <Route path="/postnotes"  element={<PostNotes/>} />
    <Route path="/moods/viewmoods"  element={<MoodPage/>} />
    
    <Route path="/getuser"  element={<UserProfile/>} />

  </Routes>
);

export default App
