const express = require('express');
const router = express.Router();
//import models 
const Cycle  =  require('../../models/cycle');
const Period=require('../../models/period');
// Create a new period for the cycle
router.post('/:cycleId/logperioddates', async (req, res) => {
    try {
      const cycle = await Cycle.findById(req.params.cycleId);
      if (!cycle) {
        return res.status(404).json({ message: 'Cycle not found' });
      }
  
      // Calculate period length
      let periodLength;
      if (req.body.end_date) {
        const diff = Math.abs(new Date(req.body.end_date) - new Date(req.body.start_date));
        periodLength = Math.ceil(diff / (1000 * 60 * 60 * 24));
      } else {
        periodLength = null;
      }
  
      // Create the new period
      const period = new Period({
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        periodlength: periodLength,
        cycle: cycle._id
      });
  
      // Save the period to the database
      await period.save();
  
      // Add the period to the cycle's list of periods
      cycle.periods.push(period._id);
      await cycle.save();
  
      // Return the period object as JSON
      res.status(201).json(period);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });
  //log cycle 
  router.post('/cycles', async (req, res) => {
    try {
      const start_date = new Date(req.body.start_date);
      const end_date = new Date(req.body.end_date);
      const time_diff = Math.abs(end_date.getTime() - start_date.getTime());
      const day_diff = Math.ceil(time_diff / (1000 * 3600 * 24));
  
      if (start_date >= end_date) {
        return res.status(400).json({ message: "Start date must be before end date" });
      }
  
      if (day_diff > 30) {
        return res.status(400).json({ message: "Cycle length must not exceed 30 days" });
      }
  
      const cycle = new Cycle({
        userID: req.body.userID,
        cycleID: req.body.cycleID,
        periodID: req.body.periodID,
        start_date: start_date,
        end_date: end_date,
        lutealphase: req.body.lutealphase,
        cyclelength: req.body.cyclelength
      });
  
      const savedCycle = await cycle.save();
      res.json(savedCycle);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
module.exports = router;