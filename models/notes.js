const  mongoose = require("mongoose");

const notesSchema = mongoose.Schema(
    {

    }
)


module.exports =mongoose.model("Notes", notesSchema);