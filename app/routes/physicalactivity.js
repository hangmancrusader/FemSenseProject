const express = require('express');
const router = express.Router();
//import models 
const PhysicalActivity  = require('../../models/physicalactivity');

//route handler for /physicalactivity
router.post(("/"), async(req,res)=>{
    
    try {
      console.log(req.body.physicalactivityId)
      const physicalactivity = new PhysicalActivity({
        physicalactivityId: req.body.physicalactivityId,
        description: req.body.description,
      });
      await physicalactivity.save();
      res.status(201).json({ message: "Activities logged successfully", physicalactivity });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Unable to log activity" });
    }
});

router.get(("/:phyID"),async(req,res)=>{
    try {
        const physicalactivity = await PhysicalActivity.findById(req.params.phyID);
        if (!physicalactivity) {
          res.status(404).json({ message: "Activities not found" });
        }
        res.status(200).json(physicalactivity);
      } catch (error) {
        res.status(500).json({ error: "Unable to get activity" });
      }
   
});

router.delete(("/:phyID"), async(req,res)=>{
    try{ 
        const physicalactivity= await PhysicalActivity.findByIdAndDelete(req.params.phyID);
        if(!physicalactivity)
        {
          res.status(404).json({message: "Activity  does not exist"});
        }
        res.status(200).json(physicalactivity);
      }catch(err)
      {
        res.status(500).json({ error: "Unable to delete activity" });
      }
    
});

module.exports = router;