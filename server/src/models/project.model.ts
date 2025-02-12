import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  projectSlug: {
    type: String,
    unique: true,
    required: true,
  },
  projectLimit: {
    type: Number,
    default: 1
  }
});

const Projects = mongoose.model("Projects", projectSchema);

export default Projects;
