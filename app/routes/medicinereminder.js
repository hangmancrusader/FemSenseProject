const express = require('express');
const router = express.Router();

//import models 
const medicinereminder = require('../../models/medicinereminder');

//route handlers for /medicinereminder
router.post(("/"), async(req,res)=>{
    
  try {
    const reminder = new medicinereminder(req.body);
    await reminder.save();
    res.status(201).json({ message: "Reminder created successfully", reminder });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to create reminder" });
  }

  //the other way is to divide the response of this reminder object into academind type example
});

router.get(("/:reminderID"),async(req,res)=>{
    try {
        const reminder = await medicinereminder.findById(req.params.reminderID);
        if (!reminder) {
          res.status(404).json({ message: "Reminder not found" });
        }
        res.status(200).json(reminder);
      } catch (error) {
        res.status(500).json({ error: "Unable to get reminder" });
      }
    
});

router.delete(("/:reminderID"), async(req,res)=>{
    try{ 
        const reminder = await medicinereminder.findByIdAndDelete(req.params.reminderID);
        if(!reminder)
        {
          res.status(404).json({message: "Reminder not found"});
        }
        res.status(200).json(reminder);
      }catch(error)
      {
        res.status(500).json({ error: "Unable to delete reminder" });
      }
    
});

module.exports = router;