const express = require('express');
const router = express.Router();
//middleware
router.use(express.json());
//import models 
const Medicinereminder = require('../../models/medicinereminder');

//route handlers for /medicinereminder
router.post(("/"), async(req,res)=>{
    
  try {
    const {userId,medicine, reminderID,frequency,remindertime} = req.body;
    console.log(userId,medicine, reminderID,frequency,remindertime);
    const reminder = new Medicinereminder({userId,medicine, reminderID,frequency,remindertime});
    await reminder.save();
    res.status(201).json({ message: "Reminder created successfully",med:medicine,freq:frequency,time:remindertime });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to create reminder" });
  }

  //the other way is to divide the response of this reminder object into academind type example
});



router.get("/:id", async (req, res) => {
  try {
    const userId = req.body.userId; // Get the userId from the request body
    const reminders = await Medicinereminder.find({ userId: req.params.id });

    if (!reminders || reminders.length === 0) {
      return res.status(404).json({ message: "Reminders not found" });
    }

    res.status(200).json(reminders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to get reminders" });
  }
});
router.get(("/:reminderID"),async(req,res)=>{
  try {
      const reminder = await Medicinereminder.find({"reminderID":req.params.reminderID});
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
        const reminder = await Medicinereminder.findOneAndRemove({"reminderID":req.params.reminderID});
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