const  mongoose = require("mongoose");

const moodSchema = mongoose.Schema(
    {

    }
)


module.exports =mongoose.model("Mood", moodSchema);