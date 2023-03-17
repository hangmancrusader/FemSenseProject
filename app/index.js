require("dotenv").config({ path: '../.env' });

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

 

module.exports = app;