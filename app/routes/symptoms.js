const express = require('express');
const router = express.Router();
//import models 
const Symptoms  = require('../../models/symptoms');

//route handler for /symptoms
router.post(("/"), async(req,res)=>{
    
    try {
      const symptoms = new Symptoms(req.body);
      await symptoms.save();
      res.status(201).json({ message: "Symptoms logged successfully", symptoms });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Unable to log symptoms" });
    }
});

router.get(("/:sympID"),async(req,res)=>{
    try {
        const symptoms = await Symptoms.findById(req.params.sympID);
        if (!symptoms) {
          res.status(404).json({ message: "Symptoms not found" });
        }
        res.status(200).json(symptoms);
      } catch (error) {
        res.status(500).json({ error: "Unable to get symptoms" });
      }
   
});

router.delete(("/:sympID"), async(req,res)=>{
    try{ 
        const symptoms= await Symptoms.findByIdAndDelete(req.params.sympID);
        if(!symptoms)
        {
          res.status(404).json({message: "Symptoms does not exist"});
        }
        res.status(200).json(symptoms);
      }catch(err)
      {
        res.status(500).json({ error: "Unable to delete symptoms" });
      }
    
});
module.exports = router;