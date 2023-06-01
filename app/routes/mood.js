const express = require('express');
const router = express.Router();
//middleware
router.use(express.json());
//import models 
const MoodTracker = require('../../models/mood');

//route handler for /moodtracker
router.post(("/"), async(req,res)=>{
    
    try {
      const{moodId,description} = req.body;
      const moodtracker = new MoodTracker({moodId,description});
      console.log(moodtracker);
      await moodtracker.save();
      res.status(201).json({ message: "Moods logged successfully", id:moodId,description:description });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Unable to log moods" });
    }
});

router.get(("/:moodID"),async(req,res)=>{
    try {
        const moodtracker = await MoodTracker.find({"moodId":req.params.moodID});
        if (!moodtracker) {
          res.status(404).json({ message: "Moods not found" });
        }
        res.status(200).json(moodtracker);
      } catch (error) {
        res.status(500).json({ error: "Unable to get moods" });
      }
   
});

router.delete(("/:moodID"), async(req,res)=>{
    try{ 
        const moodtracker= await MoodTracker.findOneAndRemove({"moodId":req.params.moodID});
        if(!moodtracker)
        {
          res.status(404).json({message: "Moods does not exist"});
        }
        res.status(200).json(moodtracker);
      }catch(error)
      {
        res.status(500).json({ message: "Unable to delete Moods" });
      }
    
});
//handles route to add new mood in description array
router.patch(("/editmood/:moodID"), async(res,req) =>{
  try{
    const { moodID } = req.params; //eqbl to const id = req.params.moodID
    const { description } = req.body;

    const updatedDoc = await MoodTracker.findOneAndReplace(moodID, {
      $push: { 'description.enum': description },
    }, { new: true });

    res.status(200).json(updatedDoc);
  
  }catch(error){
    console.error(error);
    res.status(500).json({mesage: "Unable to update mood tracker"});
  }
})

//remove a mood from description array
router.patch(("/editmood/:moodID"), async(res,req) =>{
  try{
    const { moodID } = req.params; //eqbl to const id = req.params.moodID
    const { description } = req.body;

    const updatedDoc = await MoodTracker.findByIdAndUpdate(moodID, {
      $pull: { 'description.enum': description },
    }, { new: true });

    res.status(200).json(updatedDoc);
  
  }catch(error){
    console.error(error);
    res.status(500).json({mesage: "Unable to update mood tracker"});
  }
})
module.exports = router;