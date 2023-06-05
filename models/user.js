const  mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: { type: String, default: null,required: true },
        email: { type: String, required: true },
        password: { type: String },
        roleid: { type: Number, default: 2 },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
        
    } 
)


module.exports =mongoose.model("User", userSchema);