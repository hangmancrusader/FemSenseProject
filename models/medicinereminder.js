const  mongoose = require("mongoose");

const medicinereminderSchema = mongoose.Schema(
    {
        medicine: {type: [String], required: true},
        reminderID: {
            type: Number, required: true, unique: true
        },
        frequeny:{
            type: [String], 
            enum: ["Monday", "Wednesday", "Tuesday","Thursday","Saturday","Sunday" ],
        },
        remindertime: {type: Date.now, required: true, default: null}

    }
)


module.exports =mongoose.model("MedicineReminder", medicinereminderSchema);