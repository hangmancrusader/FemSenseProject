const  mongoose = require("mongoose");

const moodSchema = mongoose.Schema(
    {
        
        moodId: {
            type: Number,
            required: true,
            unique: true
        },
        description:
        { 
            type: [String], 
            enum: [ "calm", "happy", "energetic", "frisky", "mood swings", "irritated", "sad", "anxious", "depressed","apathetic","confused", "self-critical","feeling guilty","obsessive thoughts"] 
        } 
    }
)


module.exports =mongoose.model("Mood", moodSchema);