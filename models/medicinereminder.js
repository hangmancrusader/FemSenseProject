const  mongoose = require("mongoose");

const medicinereminderSchema = mongoose.Schema(
    {
        userId:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'user',
            required:  true
        },
        medicine: {type: [String], required: true},
        reminderID: {
            type: Number, required: true, unique: true
        },
        frequency:{
            type: [String], 
            enum: ["Monday", "Wednesday", "Tuesday","Thursday","Saturday","Sunday" ],
        },
        remindertime: {type: Date, required: true, default: null}

    }
)


module.exports =mongoose.model("MedicineReminder", medicinereminderSchema);