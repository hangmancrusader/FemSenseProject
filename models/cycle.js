const  mongoose = require("mongoose");

const cycleSchema = mongoose.Schema(
    {
       userID:
       {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
      l
       },
       cycleID:
       {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
       
       },
       start_date:
       {

       },
       end_date:
       {

       },
       lutealphase:
       {
        type: Number,
        required: true,
        //set a default value between 14-18 days and check that value shouldn't exceed the range
       },
       //needs period collection ref - everyc cycle has period
       cyclelength:
       {
        type: Number,
        required: true,
        default: 0
        //set a check that length should exceed 45 days 
       }
       
       
       
       
       
       
       
       
       
       
        /* "id":"period_123",
"start_date":"2023-02-14",
"end_date":"2023-02-19",
"length":6,
"symptoms":
[{"name":"cramps","severity":7,"notes":"Took pain reliever"},{"name":"headache","severity":5,"notes":""},{"name":"bloating","severity":3,"notes":""}],
"medications":[{"name":"ibuprofen","dosage":"200mg",
"frequency":"as needed",
"notes":"Take with food"}*/
    }
)


module.exports =mongoose.model("cycleSchema", cycleSchema);