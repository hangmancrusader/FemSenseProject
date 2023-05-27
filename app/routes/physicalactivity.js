const express = require('express');
const router = express.Router();
//import models 
const PhysicalActivity  = require('../../models/physicalactivity');
//middleware to parse json body of POSTMAN request
router.use(express.json());
//route handler for /physicalactivity
router.post(("/"), async(req,res)=>{
    
    try {
      const{ physicalactivityId, description} = req.body;
      console.log(physicalactivityId,description);
      const activity= new PhysicalActivity({physicalactivityId, description});
      await activity.save();
      res.status(201).json({ message: "Activities logged successfully", activityId:physicalactivityId, description:description });
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