const  mongoose = require("mongoose");

const insightsSchema = mongoose.Schema(
    {
        insightID:
        {
            type: Number,
            required: true,
            unique: true
        },
        insight_topic:
        {
            type:String,
            required: true,
            default: null
        },
        insight_video:{
            default: null
        },
        insight_category:{
            type: String,
            enum: [],
            required: true,
            default: null
        },
        insight_article:{
            type: String,
            required: true,
            default: null
        }
    }
)


module.exports =mongoose.model("Insights", insightsSchema);