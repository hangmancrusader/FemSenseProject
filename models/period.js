const  mongoose = require("mongoose");

const periodSchema = mongoose.Schema(
    {
       periodID:
       {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
      
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
        max: 8
       }

    }
)


module.exports =mongoose.model("Period", periodSchema);