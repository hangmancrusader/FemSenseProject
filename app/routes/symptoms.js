const express = require('express');
const router = express.Router();
//import models 
const Symptoms  = require('../../models/symptoms');
router.use(express.json());
//route handler for /symptoms
router.post(("/"), async(req,res)=>{
    try {
      const{ symptomId, description} = req.body;
      console.log(symptomId,description);
      const symptoms = new Symptoms({symptomId, description});
      await symptoms.save();
      res.status(201).json({ message: "Symptoms logged successfully", symptomId:symptomId,description:description });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Unable to log symptoms" });
    }
});

router.get(("/:sympID"),async(req,res)=>{
  
    try {
<<<<<<< HEAD
        const symptoms = await Symptoms.find({"symptomId":req.params.sympID});
        console.log(symptoms);
=======
        const symptoms = await Symptoms.findById(req.params.sympID);
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
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
<<<<<<< HEAD
        const symptoms= await Symptoms.findOneAndRemove(req.params.sympID);
=======
        const symptoms= await Symptoms.findByIdAndDelete(req.params.sympID);
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
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