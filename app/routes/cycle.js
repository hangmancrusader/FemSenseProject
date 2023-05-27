const express = require('express');
const router = express.Router();
//import models 
const Cycle  =  require('../../models/cycle');
const Period=require('../../models/period');
// Create a new period for the cycle
<<<<<<< HEAD
router.post('/:cycleId/logperioddates', async (req, res) => {
    try {
      const cycle = await Cycle.findById(req.params.cycleId);
=======
router.post('/Cycles/:userId', async (req, res) => {
  try {
    console.log("hello")
    const {  periodID, start_date, end_date, lutealphase, cyclelength } = req.body;
   
    // Create a new cycle document
    const newCycle = new Cycle({
      userID:req.params.userId,
      periodID,
      start_date,
      end_date,
      lutealphase,
      cyclelength
    });

    // Save the new cycle document to the database
    const savedCycle = await newCycle.save();

    res.json(savedCycle);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
});
// 
router.put('/update/:cycle_id', async (req, res) => {
  try {
    const cycle = await Cycle.findByIdAndUpdate(req.params.cycle_id, req.body, { new: true });
    if (!cycle) {
      return res.status(404).json({ message: 'Cycle not found' });
    }
    res.json({ message: 'Cycle updated successfully', cycle });
  } catch (err) {
    res.status(400).json({ message: 'Failed to update cycle', error: err.message });
  }
});
router.post('/:cycleId/logperioddates', async (req, res) => {
    try {
      const cycle = await Cycle.findById(req.params.cycleId);
      console.log("Bad-Bunny")
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
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
<<<<<<< HEAD
        cycle: cycle._id
=======
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
      });
  
      // Save the period to the database
      await period.save();
  
      // Add the period to the cycle's list of periods
<<<<<<< HEAD
      cycle.periods.push(period._id);
      await cycle.save();
  
      // Return the period object as JSON
      res.status(201).json(period);
=======
      console.log("this is period id "+period.id)
      cycle.periods.push(period.id);
      await cycle.save();
  
      // Return the period object as JSON
      res.status(201).json(cycle.periodID);
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });
<<<<<<< HEAD
  //log cycle 
  router.post('/cycles', async (req, res) => {
=======
  router.delete('/delete/:id', async (req, res) => {
    try {
      // Find and delete the cycle record by ID
      const deletedCycle = await Cycle.findByIdAndDelete(req.params.id);
  
      if (!deletedCycle) {
        return res.status(404).json({ message: 'Cycle record not found' });
      }
  
      res.json({ message: 'Cycle record deleted successfully' });
    } catch (err) {
      const errors = handleErrors(err);
      res.status(400).json({ errors });
    }
  });
  //log cycle 
  router.post('/cycles/:userId', async (req, res) => {
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
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
<<<<<<< HEAD
        userID: req.body.userID,
        cycleID: req.body.cycleID,
=======
        userID: req.params.userId,
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
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
<<<<<<< HEAD
=======
  router.get('/:cycleId', async (req, res) => {
    const  id  = req.params.cycleId;
  
    try {
      const cycle = await Cycle.findById(id);
      if (!cycle) {
        return res.status(404).json({ message: 'Cycle not not  found' });
      }
      res.json(cycle);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  router.get('/:cycleId/period', async (req, res) => {
    const  id  = req.params.cycleId;
  
    try {
      const cycle = await Cycle.findById(id);
      if (!cycle) {
        return res.status(404).json({ message: 'Cycle not not  found' });
      }
      res.json("this is perid id "+cycle.periodID);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
module.exports = router;