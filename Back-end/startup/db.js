const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/bookingSystem", { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => {
  console.log("Database Connected Successfully!");
})
.catch((error) => {
  console.log(error);
});
module.exports = mongoose;
