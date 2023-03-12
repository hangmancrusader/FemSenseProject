
const  mongoose = require("mongoose");

const physicalactivitySchema = mongoose.Schema(
    {

    }
)


module.exports =mongoose.model("PhysicalActivity", physicalactivitySchema);