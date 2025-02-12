import mongoose, { Schema } from "mongoose";
import User from "./user.model";
import Projects from "./project.model";

const publicLinkSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  projectId: {
     type: mongoose.Schema.Types.ObjectId,
     ref: Projects,
     required: true
  }, 
  publicUrl: {
     type: String, 
     required: true,
     unique: true
  }
});


const PublicLink = mongoose.model("PublicLink", publicLinkSchema);

export default PublicLink;