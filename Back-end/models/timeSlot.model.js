const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const TimeSlotSChema = new Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    startTime: Date,
      endTime: Date,
      availability: {type:String, enum: [ 'Available', 'Booked']},
    // booked: {type:Boolean, required:true}, 
    // bookingId: {type:String},
    duration:{type:Number, required:true}

});

var TimeSlot = mongoose.model("TimeSlot", TimeSlotSChema);

module.exports = { TimeSlot };
