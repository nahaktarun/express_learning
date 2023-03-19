const express = require("express");
const router = express.Router();
const Model = require("./model");

// Posting data to database
router.post("/post", async (req, res) => {
  const data = new Model({
    name: req.body.name,
    age: req.body.age,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// getting all the data from the database
router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// getting data based on the ID

router.get("/getOne/:id", async (req, res) => {
  //   res.send(req.params.id);
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// updating data based on ID

router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const option = { new: false };

    const result = await Model.findByIdAndUpdate(id, updatedData, option);
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Deleting data based on the ID

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`data for the ${data.name} is deleted....`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
