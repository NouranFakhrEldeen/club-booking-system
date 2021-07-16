
var express = require("express");
var router = express.Router();
var {Activity} = require("../models/activity.model");

router.post("/", async (req, res) => {
    var data = req.body;
    try {
      var Activitydata = await Activity.create(data);
      console.log(Activitydata);
      return res.send("Activity added Successfully");
    } catch (error) {
      return res.status(400).send(error.message);
    }
  });
router.get("/", async(req, res)=>{
    try {
        var allActivities = await Activity.find({});
        return res.send(allActivities)
    } catch (error) {
        return res.status(400).send(error.message);
      }
})
router.get("/:id", async(req, res)=>{
    try {
      console.log("activity ", req.params.id)
        var activity = await Activity.findById({_id:req.params.id});
        return res.send(activity)
    } catch (error) {
        return res.status(400).send(error.message);
      }
})
  module.exports = router;