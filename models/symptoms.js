const  mongoose = require("mongoose");

const symptomsSchema = mongoose.Schema(
    {
        _symptomId: mongoose.Schema.Types.ObjectId,
        symptomId: {
            type: Number,
            required: true,
            unique: true
        },
        description:
        { 
            type: [String], 
            enum: [ "everything is fine", "cramps", "headache", "tender breasts", "acne", "cravings", "insomnia", "cravings", "bloating","constipation","nausea", "abdominal pain","fatigue","diarrhea"] 
        } 
       
 }); 
  


module.exports =mongoose.model("Symptoms", symptomsSchema);