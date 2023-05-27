
require("dotenv").config();
const express = require('express')
const jwt = require("jsonwebtoken");
const cors=require("cors");
//express app that has middleware to route the endpoints to their
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());
app.use(cors())

//import the routehandlers for each endpoint
const userRoutes = require('./routes/user');
// const symptomsRoutes = require('./routes/symptoms');
 const periodRoutes = require('./routes/period');
 const cycleRoutes = require('./routes/cycle');
// const medicinereminderRoutes = require('./routes/medicinereminder');
// const notesRoutes = require('./routes/notes');
// const physicalActivityRoutes = require('./routes/physicalactivity');
// const moodtrackerRoutes = require('./routes/mood');
// const menstraulflowRoutes = require('./routes/menstrualflow');
// const insightsRoutes = require('./routes/insights');
 const daytrackRoutes = require('./routes/daytrack');
 app.use("/daytracker", daytrackRoutes);
//defining routes that handle req to given endpoints
// app.use("/medicinereminder", medicinereminderRoutes);
 app.use("/period", periodRoutes);
 app.use("/cycle", cycleRoutes);
  app.use("/user", userRoutes);
// app.use("/symptoms", symptomsRoutes);
// app.use("/notes", notesRoutes);
// app.use("/physicalactivity", physicalActivityRoutes);
// app.use("/moodtracker", moodtrackerRoutes);
// app.use("/menstrualflow", menstraulflowRoutes);
// app.use("/insights", insightsRoutes);

const mongoose=require('mongoose')
mongoose.connect( "mongodb+srv://notsobad_bilal:bilal786786@cluster0.r8hl8am.mongodb.net/?retryWrites=true&w=majority"

);

mongoose.set("strictQuery", false);
mongoose.connection.on('error',err => {
    console.log('Connection failed'); 
});
mongoose.connection.on('connected',connected=>{
    console.log('Connected with database sucessfully'); 
})
app.get('/set-cookies', (req, res) => {
   res.setHeader('Set-Cookie', 'newUser-true');
  res.cookie('newUser', true);
  res.cookie('isEmployee', true, { maxAge: 1000* 68 *68* 24, httpOnly: false });
  res.send('you got the cookies!');
});
  app.get('/read-cookies', (req, res) => {
  const cookies = req.cookies;
  console.log(cookies);
  });
module.exports = app;