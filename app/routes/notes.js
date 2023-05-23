const express = require('express');
const router = express.Router();
//import models 
const Notes = require('../../models/notes');
//middleware
router.use(express.json());
//route handlers for /notes
router.post(("/"), async(req,res)=>{
    
    try {
      const {notesId, description}= new Notes(req.body);
      console.log(notesId,description);
      const notes= new Notes({notesId, description});
      await notes.save();
      res.status(201).json({ message: "Notes posted successfully", id:notesId,notes: description });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Unable to post notes" });
    }

    //the other way is to divide the response of this reminder object into academind type example
});

router.get(("/:notesID"),async(req,res)=>{
    try {
        const notes = await Notes.find({"notesId":req.params.notesID});
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
        const notes= await Notes.findOneAndRemove(req.params.notesID);
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
router.patch("/editnote/:noteID", async(req,res) =>{
  try{
  const notes = await Notes.findById(req.params.noteID);
  var isSuccessful = false;
  if(!notes)
  {
    return res.status(404).json({message: "Note not found"},isSuccessful);
  }
  notes.description = req.body.description;

  await notes.save();
  isSuccessful = true;
  res.status(201).json({isSuccessful, description:notes.description});
}catch(error)
{
  console.log(error);
  res.status(500).json({message: "Could not edit notes"})
}
});
module.exports = router;