const  mongoose = require("mongoose");

const periodSchema = mongoose.Schema(
    {
       periodID:
       {
<<<<<<< HEAD
        //type: mongoose.Schema.Types.ObjectId,
        type:Number,
        required:true,
        unique:true
        
=======
        type: mongoose.Schema.Types.ObjectId,
        required:false,
      
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
       },
       
       start_date:
       {
        type: Date,
        required: true
       },
       end_date:
       {
        type: Date,
        required: true //needed??
       },
       
       periodlength:
       {
        type: Number,
        required: true,
        default: 0,
        min: 2,
<<<<<<< HEAD
        max: 8
=======
        max: 15
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
       }

    }
)


module.exports =mongoose.model("Period", periodSchema);