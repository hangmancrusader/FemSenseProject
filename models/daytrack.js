const  mongoose = require("mongoose");

const daytrackSchema = mongoose.Schema(
    {
        trackerID:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            unique: true
        },
        userID:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'user',
            required:  true
        },
        date:
        {
            type: Date.now,
            required: true,
            default: null
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

        }

    }
)


module.exports =mongoose.model("DayTrack", daytrackSchema);