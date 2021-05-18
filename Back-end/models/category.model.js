const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const CategorySChema = new Schema({
  name: { type: String, required: true },
  subCategory: [{ name: { type: String } }]
});
var Category = mongoose.model("Category", CategorySChema);

module.exports = { Category };
