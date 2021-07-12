const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ActivitySChema = new Schema({
    title: { type: String, required: true },
  img : { type: String, required: true},
  capacity: { type: Number, required: true },
  cost: { type: Number, required: true},
  time : { type: Number, required: true },
  Images: [{
    type: String
}]


});
var Activity = mongoose.model("Activity", ActivitySChema);

module.exports = { Activity };
