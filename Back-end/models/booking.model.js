const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const BookingSchema = new Schema({
  activityId: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  }
  ,
  lastName: {
    type: String,
    required: true
  }
  ,
  mobileNumber: {
    type: Number,
    required: false
  }
  ,
  day: {
    type: String,
    required: true
  }
  ,
  from: {
    type: Number,
    required: true
  }
  ,
  to: {
    type: Number,
    required: true
  }
});

var Booking = mongoose.model("booking", BookingSchema);
module.exports = { Booking };
