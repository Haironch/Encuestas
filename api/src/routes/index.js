const { Router } = require("express");
const router = Router();
const Student = require("../models/Students")

router.post("/api/students", async (req, res) => {
  const newUser = await Student(req.body);
  const savedUser = await newUser.save();
  res.json(savedUser);
});
router.get("/api/students", async (req, res) => {
  const users = await Student.find();
  res.json(users);
});

router.delete("/api/student/:id", async (req, res) => {
  const { id } = req.params
  await Student.findByIdAndDelete(id)
  res.json({message: 'Student deleted'});
});

router.put("/api/student/:id", async (req, res) => {
  const { id } = req.params
  await Student.findByIdAndUpdate(id, req.body)
  res.json({message: 'Student updated'});
});

module.exports = router;
