import express from "express";
import bcrypt from "bcrypt";
import User from "../models/user.model";
import jwt from "jsonwebtoken";

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

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email: email,
    });

    if (!user) {
      res.status(404).send({
        MSG: "User not found!",
      });
    } else {
      const matchPassword = await bcrypt.compare(password, user?.password);
      if (!matchPassword) {
        res.status(401).send({
          MSG: "Invalid credentials!",
        });
      } else {
        const token = jwt.sign(
          {
            userId: user._id,
          },
          `process.env.JWT_SECRET`
        );

        res.status(201).send({
          MSG: "Login Successful",
          token: token,
        });
      }
    }
  } catch (error) {
    res.status(500).send({
      MSG: "Internal server error",
    });
  }
});

export default router;
