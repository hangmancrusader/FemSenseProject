require("dotenv").config();
const express = require('express')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//express app that has middleware to route the endpoints to their
const app = express()

//import the routehandlers for each endpoint
const userRoutes = require('./routes/user');
const symptomsRoutes = require('./routes/symptoms');
const periodRoutes = require('./routes/period');
const cycleRoutes = require('./routes/cycle');
const medicinereminderRoutes = require('./routes/medicinereminder');
const notesRoutes = require('./routes/notes');
const physicalActivityRoutes = require('./routes/physicalactivity');

 
module.exports = app;