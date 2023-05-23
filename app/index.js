<<<<<<< HEAD
require("dotenv").config({ path: '../.env' });

//fatimas db 
const mongoose=require('mongoose')
mongoose.connect( "mongodb+srv://fmus22996:outlander1746@cluster0.pk5gqpb.mongodb.net/?retryWrites=true&w=majority "

);

mongoose.set("strictQuery", false);
mongoose.connection.on('error',err => {
    console.log('Connection failed'); 
});
mongoose.connection.on('connected',connected=>{
    console.log('Connected with database sucessfully'); 
})



const express = require("express")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');
//express app that has middleware to route the endpoints to their
const app = express()
app.use(express.json())
//import the routehandlers for each endpoint
const userRoutes = require('./routes/user');
const symptomsRoutes = require('./routes/symptoms');
const periodRoutes = require('./routes/period');
const cycleRoutes = require('./routes/cycle');
const reminderRoutes = require('./routes/medicinereminder');
const notesRoutes = require('./routes/notes');
const physicalActivityRoutes = require('./routes/physicalactivity');
const moodtrackerRoutes = require('./routes/mood');
const menstraulflowRoutes = require('./routes/menstrualflow');
//const insightsRoutes = require('./routes/insights');
const daytrackRoutes = require('./routes/daytrack');

//defining routes that handle req to given endpoints
app.use("/medicinereminder", reminderRoutes);
app.use("/period", periodRoutes);
app.use("/cycle", cycleRoutes);
app.use("/user", userRoutes);
app.use("/symptoms", symptomsRoutes);
app.use("/notes", notesRoutes);
app.use("/physicalactivity", physicalActivityRoutes);
app.use("/moodtracker", moodtrackerRoutes);
app.use("/menstrualflow", menstraulflowRoutes);
//app.use("/insights", insightsRoutes);
//app.use("/daytracker", daytrackRoutes);
app.use(bodyParser.json());
// const symptomsRoutes = require('./routes/symptoms');
// const periodRoutes = require('./routes/period');
// const cycleRoutes = require('./routes/cycle');
=======

require("dotenv").config();
const express = require('express')
const jwt = require("jsonwebtoken");

//express app that has middleware to route the endpoints to their
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());

//import the routehandlers for each endpoint
const userRoutes = require('./routes/user');
// const symptomsRoutes = require('./routes/symptoms');
 const periodRoutes = require('./routes/period');
 const cycleRoutes = require('./routes/cycle');
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
// const medicinereminderRoutes = require('./routes/medicinereminder');
// const notesRoutes = require('./routes/notes');
// const physicalActivityRoutes = require('./routes/physicalactivity');
// const moodtrackerRoutes = require('./routes/mood');
// const menstraulflowRoutes = require('./routes/menstrualflow');
// const insightsRoutes = require('./routes/insights');
<<<<<<< HEAD
// const daytrackRoutes = require('./routes/daytrack');

//defining routes that handle req to given endpoints
// app.use("/medicinereminder", medicinereminderRoutes);
// app.use("/period", periodRoutes);
// app.use("/cycle", cycleRoutes);
//  app.use("/user", userRoutes);
=======
 const daytrackRoutes = require('./routes/daytrack');
 app.use("/daytracker", daytrackRoutes);
//defining routes that handle req to given endpoints
// app.use("/medicinereminder", medicinereminderRoutes);
 app.use("/period", periodRoutes);
 app.use("/cycle", cycleRoutes);
  app.use("/user", userRoutes);
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
// app.use("/symptoms", symptomsRoutes);
// app.use("/notes", notesRoutes);
// app.use("/physicalactivity", physicalActivityRoutes);
// app.use("/moodtracker", moodtrackerRoutes);
// app.use("/menstrualflow", menstraulflowRoutes);
// app.use("/insights", insightsRoutes);
<<<<<<< HEAD
// app.use("/daytracker", daytrackRoutes);
/*const mongoose=require('mongoose')
=======

const mongoose=require('mongoose')
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
mongoose.connect( "mongodb+srv://notsobad_bilal:bilal786786@cluster0.r8hl8am.mongodb.net/?retryWrites=true&w=majority"

);

mongoose.set("strictQuery", false);
mongoose.connection.on('error',err => {
    console.log('Connection failed'); 
});
mongoose.connection.on('connected',connected=>{
    console.log('Connected with database sucessfully'); 
<<<<<<< HEAD
})*/
 

=======
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
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
module.exports = app;