const  mongoose = require("mongoose");

const daytrackSchema = mongoose.Schema(
    {
<<<<<<< HEAD
        trackerID:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            unique: true
        },
=======
        
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
        userID:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'user',
            required:  true
        },
        date:
        {
<<<<<<< HEAD
            type: Date.now,
            required: true,
            default: null
=======
            type: Date, default: Date.now
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
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
<<<<<<< HEAD

        },
        BodyTemp:{

        },
        Mood:{

        },
        Symptoms:
        {

        },
        Physical_Activity:{

        },
        Medicine:{

=======
          type:String,
          default:null
        },
        BodyTemp:{
            type:String,
            default:null
        },
        Mood:{
            type:[mongoose.Schema.Types.ObjectId],
            ref:'mood',
            required:  false
        },
        Symptoms:
        {
            type:[mongoose.Schema.Types.ObjectId],
            ref:'symptoms',
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
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
        }

    }
)


module.exports =mongoose.model("DayTrack", daytrackSchema);