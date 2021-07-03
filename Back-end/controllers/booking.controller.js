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
         to: 'nouranfakhreldeen@outlook.com',
        // to : "amirmorcos12345@gmail.com",
        subject: 'Booking Confirmation from Saint George Sports and Cultural Center ',
        text: 'Hello Mr./Mrs./Ms. '+data.firstName+ data.lastName+'\n Thank you for booking with us at Saint George Sports and Cultural Center \n You have booked for \n Football Court  \n Date: '+data.day+'\n Time: '+ data.from +'-' +data.to+'\n To confirm your booking, please proceed with the payment of \n '+ data.price+' EGP \n You can have your payment through either of the below \n 1-	Cash, directly to xxxx ## \n 2-	Orange Cash ## \n 3-	Vodafone Cash ## \n Please send us a copy of the payment confirmation to confirm your booking. \n Please have the payment completed within 48 hours or else the booking will be cancelled. \n In case you needed to cancel your booking, please notify xxxx #### at least 24 hours before the booking date/time (for full/partial refund) \n '+data.firstName+ data.lastName+'أهلًا أستاذ : \n شكرًا للحجز معنا في مركز سان جورج للرياضة والثقافة\n لقد أتممت الحجز في: \n ملعب الكرة \n   بتاريخ: '+data.day+ '\n الساعة:'+data.from + '-'+data.to+'\n لتأكيد الحجز، برجاء دفع مبلغ قدره: '+data.price+'جنيه مصري. \n يمكنك الدفع باستخدام أي من الوسائل الآتية: \n 1- بالكاش مباشرةً لـ...... \n 2- أورانج كاش \n 3- فودافون كاش \n برجاء إرسال نسخة من إيصال الدفع لتأكيد الحجز. \n برجاء إتمام عملية الدفع خلال مدة لا تزيد عن ٤٨ ساعة، لنتجنب إلغاء الحجز. \n إذا أردت إلغاء عملية الحجز، برجاء إبلاغ xxxxx قبل موعد الحجز بـ ٢٤ ساعة على الأقل لاسترداد قيمة المبلغ المدفوع (كليًا أو جزئيًا).'
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
  let data = req.body;
  console.log(data);
  let slotsToBook = await Booking.find({day:data.day})
  // .where('day').equals(data.day).exec();
console.log("slotsToBook avilable", slotsToBook)

slotsToBook.forEach(async (slot) => {
  console.log("slot", slot)
  // if (slot) {
  //     console.log(`Damn, the slot at ${slot.time} is already booked`); 
  // } else {
  //     await Slot.findByIdAndUpdate(
  //         slot._id,
  //         {$set: {
               
  //           id: data._id
  //         }}
  //     );
  //     console.log(`Just booked the ${slot.time} slot !`);
  // }
});
return res.send(data);
})
module.exports = router;
