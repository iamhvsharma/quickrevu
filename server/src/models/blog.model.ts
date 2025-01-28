import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  keywords: [
    {
      type: String,
      required: true,
    },
  ],
});


const Blog = mongoose.model("Blogs", blogSchema)