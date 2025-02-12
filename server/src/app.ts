import express from "express";
import userRoutes from "./routes/user.route";

const app = express();

// Middlewares
app.use(express.json());

// API Call
app.use("/api/v1/auth", userRoutes);

export { app };
