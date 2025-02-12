import express from "express";
import Projects from "../models/project.model";
const router = express.Router();

// Space creation Logic

router.post("/create", async (req, res) => {
  const { userId, projectName, projectSlug } = req.body;
  try {
    const project = new Projects({
      userId: userId,
      projectName: projectName,
      projectSlug: projectSlug,
    });
    await project.save();
    res.status(200).send({
      msg: "Projet Created successfully.",
    });
  } catch (error) {
    res.status(401).send({
      MSG: "Project creation failed.",
      ERROR: error,
    });
  }
});


export default router;