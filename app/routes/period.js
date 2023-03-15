const express = require('express');
const router = express.Router();
//import model
const Period = require('../../models/period');

//route handler for /period

router.get(("/:periodID"),async(req,res)=>{
    try {
        const period = await Period.findById(req.params.periodID);
        if (!period) {
          res.status(404).json({ message: "Period not found" });
        }
        res.status(200).json(period);
      } catch (error) {
        res.status(500).json({ error: "Unable to get Period" });
      }
    
});

router.post(("/"), async(req,res)=>{
    
    try {
      const period = new Period(req.body);
      await period.save();
      res.status(201).json({ message: "Period logged successfully", period });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Unable to log period" });
    }

    //the other way is to divide the response of this reminder object into academind type example
});

router.delete(("/:periodID"), async(req,res)=>{
    try{ 
        const period = await Period.findByIdAndDelete(req.params.periodID);
        if(!period)
        {
          res.status(404).json({message: "Period does not exist"});
        }
        res.status(200).json(period);
      }catch(err)
      {
        res.status(500).json({ error: "Unable to delete period" });
      }
    
});
router.put();
module.exports = router;