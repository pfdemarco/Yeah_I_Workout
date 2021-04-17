const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// const transactionSchema = new Schema({
//   name: {
//     type: String,
//     trim: true,
//     required: "Enter a name for transaction"
//   },
//   value: {
//     type: Number,
//     required: "Enter an amount"
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   }
// });

const transactionSchema = new Schema({
    name: {
      type: String,
      trim: true,
      required: "Enter a name for transaction"
    },
    type: {
      type: String,
      required: "Enter type of workout"
    },
    weight: {
      type: Number,
      trim: true,
      required: "Enter your weight in lbs"
    },
    sets: {
      type: Number,
      required: "Enter number of sets"
    },
    reps: {
      type: Number,
      trim: true,
      required: "Enter a number of reps"
    },
    duration: {
      type: Number,
      required: "Enter how long you worked out for"
    },
    distance: {
      type: Number,
      required: "enter the distance if applicable"
    }
  });

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;

//I should also be able to track the name, type, weight, sets, reps, and duration of exercise. 
//If the exercise is a cardio exercise, I should be able to track my distance traveled.