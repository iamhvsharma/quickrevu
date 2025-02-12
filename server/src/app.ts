import express from "express";
import userRoutes from "./routes/user.route";
import projectRoutes from "./routes/project.route"
const app = express();

// Middlewares
app.use(express.json());

// API Call
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/new", projectRoutes)

export { app };
