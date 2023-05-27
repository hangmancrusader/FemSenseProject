const  mongoose = require("mongoose");

const cycleSchema = mongoose.Schema(
    {
       userID:
       {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required:true,
      
       },
       cycleID:
       {
        type: mongoose.Schema.Types.ObjectId,
<<<<<<< HEAD
        required:true,
=======
        
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
       },
       periodID:
       {
        type: mongoose.Schema.Types.ObjectId,
<<<<<<< HEAD
        ref: 'user',
        required:true,
=======
        ref: 'period',
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
        required: true
       },
       lutealphase:
       {
        type: Number,
        required: true,
        max:17
       },
       cyclelength:
       {
        type: Number,
        required: true,
        default: 0,
        min: 27,
        max: 35
       }

    }
)


module.exports =mongoose.model("Cycle", cycleSchema);