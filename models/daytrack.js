const  mongoose = require("mongoose");

const daytrackSchema = mongoose.Schema(
    {
        
        userID:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'user',
            required:  true
        },
        date:
        {
            type: Date, default: Date.now
        },
        water_amount:{
            type: Number,
            default: 0
        },
        weight:{
            type: Number,
            default:0
        },
        Sleep:{
          type:String,
          default:null
        },
        BodyTemp:{
            type:String,
            default:null
        },
        Mood:{
            type:[mongoose.Schema.Types.ObjectId],
            ref:'Mood',
            required:  false
        },
        Symptoms:
        {
            type:[mongoose.Schema.Types.ObjectId],
            ref:'Symptoms',
            required:  false
        },
        Physical_Activity:{
            type:[mongoose.Schema.Types.ObjectId],
            ref:'physicalactivity',
            required:  false
        },
        Medicine:{
            type:[String],
            default:null
        }

    }
)


module.exports =mongoose.model("DayTrack", daytrackSchema);