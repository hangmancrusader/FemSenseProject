const  mongoose = require("mongoose");

const menstrualflowSchema = mongoose.Schema(
    {
        menstrualflowID: {
            type: Number,
            required: true,
            unique: true
        },
        description:
        { 
            type: [String], 
            enum: [ "heavy","spotting","light", "medium","clots","jelly"] 
        } 
    }
)


module.exports =mongoose.model("MenstraulFlow", menstrualflowSchema);