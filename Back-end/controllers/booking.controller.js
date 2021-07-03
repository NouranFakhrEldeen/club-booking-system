var express = require("express");
var router = express.Router();
  var nodemailer = require('nodemailer');
var { Booking } = require("../models/booking.model");
router.post("", async (req, res) => {
  var data = req.body;
  try {
      let bookingData = await Booking.findOne({
        avtivityId: req.body.avtivityId,
        email: req.body.email,
        firstName:req.body.firstName
      });

      if(bookingData)
      {
        bookingData
        .set({
          id: data.id,
          day: data.day,
          from: data.from,
          to: data.to,
         
        })
        .save();
        // return res.send(data);
      }
      else{
        Booking.create(data);
        // return res.send(" booking added Successfully");
      }
     

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'nouranahmed44@gmail.com',
          pass: 'Noran2410!'
        }
      });
      
      var mailOptions = {
        from: 'nouranahmed44@gmail.com',
        // to: 'nouranfakhreldeen@outlook.com',
        to : "amirmorcos12345@gmail.com",
        subject: 'Confirmation ',
        text: 'you booked this activity successfully'
        // name , age , email , mobiel number ,money 
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log("error",error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      return res.send(data);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

router.post("/getAvailableSlot", async(req, res)=>{
  var data = req.body;
  var from = data.from
var to = data.to 
  var slotsToBook = await Booking.find()
  .where('from').lt(to)
  .where('to').gt(from)
  .exec();
console.log("slotsToBook", slotsToBook)

// slotsToBook.forEach(async (slot) => {
//   if (slot) {
//       console.log(`Damn, the slot at ${slot.time} is already booked`); 
//   } else {
//       await Slot.findByIdAndUpdate(
//           slot._id,
//           {$set: {
               
//             id: data._id
//           }}
//       );
//       console.log(`Just booked the ${slot.time} slot !`);
//   }
// });
})
module.exports = router;
