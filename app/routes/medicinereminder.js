const express = require('express');
const router = express.Router();
//middleware
router.use(express.json());
//import models 
const Medicinereminder = require('../../models/medicinereminder');

//route handlers for /medicinereminder
router.post(("/"), async(req,res)=>{
    
  try {
    const {medicine, reminderID,frequency,remindertime} = req.body;
    console.log(medicine, reminderID,frequency,remindertime);
    const reminder = new Medicinereminder({medicine, reminderID,frequency,remindertime});
    await reminder.save();
    res.status(201).json({ message: "Reminder created successfully",med:medicine,freq:frequency,time:remindertime });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to create reminder" });
  }

  //the other way is to divide the response of this reminder object into academind type example
});

router.get(("/:reminderID"),async(req,res)=>{
    try {
<<<<<<< HEAD
        const reminder = await Medicinereminder.find({"reminderID":req.params.reminderID});
=======
        const reminder = await medicinereminder.findById(req.params.reminderID);
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
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
<<<<<<< HEAD
        const reminder = await Medicinereminder.findOneAndRemove(req.params.reminderID);
=======
        const reminder = await medicinereminder.findByIdAndDelete(req.params.reminderID);
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
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