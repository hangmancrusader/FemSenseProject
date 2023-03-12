const  mongoose = require("mongoose");

const userpreferenceSchema = mongoose.Schema(
    {

        first_name: { type: String, default: null,required: true },
        last_name: { type: String, default: null,required: true },
        email: { type: String, unique: true, required: true },
        password: { type: String },
        token: { type: String },
        dob: { type: Date, required: true },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
          
    }
)


module.exports =mongoose.model("UserPreference", userpreferenceSchema);