import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import NewPageSurvey from "./Pages/NewPageSurvey";
import UserReg from "./Pages/UserReg";
import PeriodTracker from "./Pages/PeriodTracker";
import Login from "./Pages/Login";
import Library from "./Pages/Library";
import Contact from "./Pages/Contact";
import Homepage from "./Pages/Homepage";
import Rating from "./Pages/Rating";
import Reminder from "./Pages/Reminder/Reminder"

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
import UserProfile from "./Pages/Admin/getuser";
import Adminpanel from "./Pages/Admin/adminpanel";
import ReminderOptions from "./Pages/Reminder/Reminderoptions";
import ViewReminder from "./Pages/Reminder/ViewReminder";
import DeleteReminder from "./Pages/Reminder/DeleteReminder";
import DeletedReminders from "./Pages/Reminder/DeletedReminders";
import AdminOptions from "./Pages/Admin/adminoptions";
import SelectUser from "./Pages/Admin/selectuser";
import DeleteUser from "./Pages/Admin/deleteuser";
// Example HOC for authorization
const ProtectedRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("jwt"); // Check if user is logged in (using JWT in local storage)

  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" replace /> // Redirect to login if not logged in
  );
};

const App = () => (
  <Routes>
    <Route path="/homepage" element={<Homepage />} />

    {/* Unprotected routes */}
    <Route path="/signup" element={<UserReg />} />
    <Route path="/login" element={<Login />} />

    {/* Protected routes */}
    <Route
      path="/survey"
      element={<ProtectedRoute element={NewPageSurvey} />}
    />
    <Route
      path="/periodtracker"
      element={<ProtectedRoute element={PeriodTracker} />}
    />
    <Route path="/health" element={<ProtectedRoute element={Library} />} />
    <Route path="/contactus" element={<ProtectedRoute element={Contact} />} />
    <Route path="/rateus" element={<ProtectedRoute element={Rating} />} />
    <Route path="/reminders" element={<ProtectedRoute element={Reminder} />} />

    <Route
      path="/daytrackoptions"
      element={<ProtectedRoute element={DayTrackOptions} />}
    />
    <Route
      path="/postdaytrack"
      element={<ProtectedRoute element={Postdaytrack} />}
    />
    <Route
      path="/viewdaytrack"
      element={<ProtectedRoute element={Viewdaytrack} />}
    />
    <Route path="/updatedaytrack" element = {<ProtectedRoute element={Updatedaytrack} />}/>
    <Route path="/updatedaytrack/patchdaytrack/:id" element = {<ProtectedRoute element={Patchdaytrack} />}/>
    <Route path="/deletedaytrack" element = {<ProtectedRoute element={Viewanddeletedaytrack} />} />
    <Route path="/deletedaytrack/deleted/:id" element = {<ProtectedRoute element={Deletedaytrack} />} />


    <Route
      path="/userprofile"
      element={<ProtectedRoute element={UserProfileOptions} />}
    />
    <Route path="/postmoods" element={<ProtectedRoute element={PostMoods} />} />
    <Route path="/postflow" element={<ProtectedRoute element={PostFlow} />} />
    <Route path="/postsymp" element={<ProtectedRoute element={PostSymp} />} />
    <Route path="/postPA" element={<ProtectedRoute element={PostPA} />} />
    <Route
      path="/postnotes" element={<ProtectedRoute element={PostNotes} />}/>
    <Route
      path="/moods/viewmoods" element={<ProtectedRoute element={MoodPage} />}/>
    <Route path="/getuser" element = { <ProtectedRoute element={UserProfile} />} />
    <Route path="/adminpanel"  element = {<ProtectedRoute element={Adminpanel }/>} />
    <Route path="/reminderoptions" element = {<ProtectedRoute element={ReminderOptions }/>} />
    <Route path="/viewreminders" element = {<ProtectedRoute element={ViewReminder }/>} />
    <Route path="/deletereminders" element = {<ProtectedRoute element={DeleteReminder }/>} />
    <Route path="/deletedreminder/:id" element = {<ProtectedRoute element={DeletedReminders }/>} />
    <Route path="/adminoptions" element = {<ProtectedRoute element={AdminOptions }/>} />
    <Route path="/selectuser" element = {<ProtectedRoute element={SelectUser }/>} />
    <Route path="/deleteuser/:id" element = {<ProtectedRoute element={DeleteUser }/>} />

  </Routes>
);

export default App;