const  mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: { type: String, default: null,required: true },
        email: { type: String, unique: true, required: true },
        password: { type: String },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
        
    } 
)


module.exports =mongoose.model("User", userSchema);