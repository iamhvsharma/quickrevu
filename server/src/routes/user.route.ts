import express from "express";
import bcrypt from "bcrypt";
import User from "../models/user.model";

// Initialize Router
const router = express.Router();

// Signup endpoint
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 5);
    const user = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).send({
      msg: "Signup successful!",
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      msg: "Signup failed!",
      ERROR: error,
    });
  }
});

export default router;
