
const  mongoose = require("mongoose");

const physicalactivitySchema = mongoose.Schema(
    {
        physicalactivityId: {
            type: Number,
            required: true,
            unique: true
        },
        description:
        { 
            type: [String], 
            enum: ["gym", "running", "intercourse", "dancing", "swimming", "meditation", "cycling", "no exercise" ] 
        }  
    }
)


module.exports =mongoose.model("PhysicalActivity", physicalactivitySchema);