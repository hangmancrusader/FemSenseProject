const express = require('express');
const router = express.Router();
//import models 
const Notes = require('../../models/notes');

//route handlers for /notes
router.post(("/"), async(req,res)=>{
    
    try {
      const notes = new Notes(req.body);
      await notes.save();
      res.status(201).json({ message: "Notes posted successfully", notes });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Unable to post notes" });
    }

    //the other way is to divide the response of this reminder object into academind type example
});

router.get(("/:notesID"),async(req,res)=>{
    try {
        const notes = await Notes.findById(req.params.notesID);
        if (!notes) {
          res.status(404).json({ message: "Notes not found" });
        }
        res.status(200).json(notes);
      } catch (error) {
        res.status(500).json({ error: "Unable to get notes" });
      }
   
});

router.delete(("/:notesID"), async(req,res)=>{
    try{ 
        const notes= await Notes.findByIdAndDelete(req.params.notesID);
        if(!notes)
        {
          res.status(404).json({message: "Notes does not exist"});
        }
        res.status(200).json(notes);
      }catch(err)
      {
        res.status(500).json({ error: "Unable to delete notes" });
      }
    
});
router.patch();
module.exports = router;