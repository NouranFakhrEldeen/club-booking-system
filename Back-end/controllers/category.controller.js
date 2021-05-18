var express = require("express");
var router = express.Router();

var { Category } = require("../models/category.model");

/**
 * @swagger
 * /api/Category:
 *   post:
 *     parameters:
 *      - in: body
 *        name: Category
 *        description: New catchphrase
 *        schema:
 *          type: object
 *          properties:
 *            name:
 *              type: string

 *     responses:
 *      201: 
 *         description: Created  
 */
router.post("", async (req, res) => {
  try {
    var newCategory = new Category(req.body);
    newCategory = await newCategory.save();
    return res.send({ _id: newCategory._id });
  } catch (error) {
    return res.status(400).send(error.message);
  }
});
/**
 * @swagger
 * /api/Category:
 *   get:
 *     description: All Category
 *     responses:
 *       200:
 *         description: Returns all the Category
 */
router.get("", async (req, res) => {
  try {
    var Categories = await Category.find();
    res.send(Categories);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

router.put("", async (req, res) => {
  var data = req.body;

  try {
    var existObject = await Category.findById({ _id: data._id });
    if (existObject) {
      existObject
        .set({
          id: data.id,
          name: data.name,
         
        })
        .save();
    }

    return res.send(data);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    await Category.deleteOne({ _id: req.params.id });

    return res.send("Data deleted Successfully");
  } catch (error) {
    console.log("Error is :", error.message);
    return res.status(400).send(error.message);
  }
});

module.exports = router;
