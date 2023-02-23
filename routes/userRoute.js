const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
router.post("/register", async (req, res) => {
  try { 
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res
        .status(200)
        .send({ message: "user exists alreayd", success: false });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    req.body.password = hashedpassword;
    const newuser = new User(req.body);
    await newuser.save();
    res.status(200).send({ message: "user created", success: true });
  } catch (error) {
    return res.status(500).send({ message: "Error", success: false, error });
  }
});
router.post("/login", async (req, res) => {
  try {
  } catch (error) {}
});

module.exports = router;
