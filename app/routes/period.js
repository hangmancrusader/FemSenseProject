const express = require('express');
const router = express.Router();
//import model
const Period = require('../../models/period');

//route handler for /period

router.get(("/:periodID"),async(req,res)=>{
    try {
<<<<<<< HEAD
        const period = await Period.find({"periodID":req.params.periodID});
=======
        const period = await Period.findById(req.params.periodID);
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
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
<<<<<<< HEAD
        const period = await Period.findOneAndRemove(req.params.periodID);
=======
        const period = await Period.findByIdAndDelete(req.params.periodID);
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
        if(!period)
        {
          res.status(404).json({message: "Period does not exist"});
        }
        res.status(200).json(period);
      }catch(error)
      {
        console.log(error);
        res.status(500).json({ message: "Unable to delete period" });
      }
    
});
router.patch("/updatedate/:periodID", async(req,res) =>{
try{
  const period = await Period.findById(req.params.periodID);
  var isSuccessful = false;
  if(!period)
  {
    return res.status(404).json({message: "Period not found"},isSuccessful);
  }
  period.start_date = req.body.start_date;
  period.end_date = req.body.end_date;

  await period.save();
  isSuccessful = true;
  res.json(201).json(isSuccessful, period.start_date, period.end_date);
}catch(error)
{
  console.error(error);
  res.status(500).json({message: "Could not edit dates"})
}
});

router.patch(("/editlength/:periodID"), async(req,res)=>{
 //could be implemented via query string
  try{ 
  const period = await Period.findById(req.params.periodID);
  var isSuccessful = false;
  if(!period)
  {
    return res.status(404).json({message: "Period not found", isSuccessful});
  }
  period.periodlength = req.body.periodlength;
  await period.save();
  isSuccessful = true;
  res.json(201).json({isSuccessful, length:period.length});
}
catch(error)
{
  console.error(error);
  res.status(500).json({message: "Could not edit period length"});
}
});
module.exports = router;