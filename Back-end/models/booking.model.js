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
    type: Date,
    required: true
  }
  ,
  from: {
    type: String,
    required: true
  }
  ,
  to: {
    type: String,
    required: true
  }, 
  price:{
    type: Number, 
    required : true
  }
});

var Booking = mongoose.model("booking", BookingSchema);
module.exports = { Booking };
