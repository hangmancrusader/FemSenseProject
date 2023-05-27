const  mongoose = require("mongoose");

const notesSchema = mongoose.Schema(
    {
        notesId: {
            type: Number,
            required: true,
            unique: true
        },
        description:{
            type: String,
            required: false
        }
    }
)


module.exports =mongoose.model("Notes", notesSchema);