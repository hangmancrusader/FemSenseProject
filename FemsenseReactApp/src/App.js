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
import Reminder from "./Pages/Reminder"
import DayTrackOptions from "./Pages/daytrackoptions";
import Postdaytrack from "./Pages/PostDaytrack";
import Viewdaytrack from "./Pages/ViewDayTrack";
import UserProfileOptions from "./Pages/UserProfileOptions";
import PostMoods from "./Pages/postmood";
import PostFlow from "./Pages/postflow";
import PostSymp from "./Pages/postsymptoms";
import PostPA from "./Pages/postPA";
import PostNotes from "./Pages/postnotes";
import MoodPage from "./Pages/getmoods";

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
    <Route
      path="/userprofile"
      element={<ProtectedRoute element={UserProfileOptions} />}
    />
    <Route path="/postmoods" element={<ProtectedRoute element={PostMoods} />} />
    <Route path="/postflow" element={<ProtectedRoute element={PostFlow} />} />
    <Route path="/postsymp" element={<ProtectedRoute element={PostSymp} />} />
    <Route path="/postPA" element={<ProtectedRoute element={PostPA} />} />
    <Route
      path="/postnotes"
      element={<ProtectedRoute element={PostNotes} />}
    />
    <Route
      path="/moods/viewmoods"
      element={<ProtectedRoute element={MoodPage} />}
    />
  </Routes>
);

export default App;
