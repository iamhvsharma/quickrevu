import mongoose, { Schema } from "mongoose";

const testimonoialSchema = new Schema({
  avatar: {
    type: String,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,

    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  stars: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  questions: [
    {
      type: String,
      required: true,
    },
  ],
});


const Testimonials = mongoose.model("Testimonials", testimonoialSchema);

export default Testimonials;