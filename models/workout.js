const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please Enter Your Exercise Choice"
            },
            name: {
            type: String,
            trim: true,
            required: "Please Enter Today's Exercise of Choice"
            },
            duration: {
            type: Number,
            required: "Enter How Long You Will Be Working Out"
            },
            weight: {
            type: Number
            },
            reps: {
            type: Number
            },
            sets: {
            type:Number
            }
        }
    ]

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;