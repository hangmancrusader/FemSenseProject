const express = require('express');
const medicinereminder = require('../../models/medicinereminder');
const router = express.Router();
//import models 
const medicinereminder = require('../../models/medicinereminder');

//route handlers for /medicinereminder

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
    /* try {
    const id = req.params.productId;
    const doc = await Product.findById(id).select('name price _id productImage').exec();
    console.log("From database", doc);
    if (doc) {
      res.status(200).json({
          product: doc,
          request: {
              type: 'GET',
              url: 'http://localhost:3000/products'
          }
      });
    } else {
      res.status(404).json({ message: "No valid entry found for provided ID" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }*/
});

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
router.put();
module.exports = router;