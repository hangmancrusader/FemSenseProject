const express = require('express');
const router = express.Router();
//import model
const MenstraulFlow = require('../../models/menstrualflow');

//route handler for /menstraulflow

router.get(("/:flowID"),async(req,res)=>{
    try {
        const menstraulflow = await MenstraulFlow.findById(req.params.flowID);
        if (!menstraulflow) {
          res.status(404).json({ message: "Data not found" });
        }
        res.status(200).json(menstraulflow);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Unable to get data" });
      }
    
});

router.post(("/"), async(req,res)=>{
    
    try {
      const menstraulflow = new MenstraulFlow(req.body);
      await menstraulflow.save();
      res.status(201).json({ message: "Data logged successfully", menstraulflow });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Unable to log data" });
    }

    //the other way is to divide the response of this reminder object into academind type example
});

router.delete(("/:flowID"), async(req,res)=>{
    try{ 
        const menstraulflow = await MenstraulFlow.findByIdAndDelete(req.params.flowID);
        if(!menstraulflow)
        {
          res.status(404).json({message: "Data does not exist"});
        }
        res.status(200).json(menstraulflow);
      }catch(error)
      {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    
});

//handler if initial decription field i EMPTY
//description field holds only SINGLE ENUM value
router.patch("/updatemenstrualflow/:flowID", async(req,res) =>{
try{
  const menstraulflow = await menstraulflow.findById(req.params.flowID);
  var isSuccessful = false;
  if(!menstraulflow)
  {
    return res.status(404).json({message: "Data not found"},isSuccessful);
  }
  menstraulflow.description = req.body.description;

  await menstraulflow.save();
  isSuccessful = true;
  res.status(201).json({isSuccessful, description:menstraulflow.description});
}catch(error)
{
  console.log(error);
  res.status(500).json({message: "Could not edit data"})
}
});

module.exports = router;