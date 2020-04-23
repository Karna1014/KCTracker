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
            },
            distance: {
                type: Number
            }
        }
    ]
    }, 
    {
        toJSON: {
        virtuals: true
        }
    }
);

WorkoutSchema.virtual("totalDuration").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;