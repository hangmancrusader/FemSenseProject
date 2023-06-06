import React from 'react';
import ReminderForm from '../../Component/TrackerComponent/ReminderForm';
import { Typography} from "@mui/material";

const App = () => {
  return (
    <div>
      <Typography variant="h4" sx={{ textAlign: 'center',fontFamily: "Avenir Next", marginTop:'6rem', color: '#C46471' }}>Add Reminder</Typography>
        <ReminderForm />
    </div>
  );
};

export default App;
