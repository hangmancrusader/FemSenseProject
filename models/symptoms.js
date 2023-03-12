const  mongoose = require("mongoose");

const symptomsSchema = mongoose.Schema(
    {

    }
)


module.exports =mongoose.model("Symptoms", symptomsSchema);