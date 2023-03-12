const  mongoose = require("mongoose");

const userpreferenceSchema = mongoose.Schema(
    {

    }
)


module.exports =mongoose.model("UserPreference", userpreferenceSchema);