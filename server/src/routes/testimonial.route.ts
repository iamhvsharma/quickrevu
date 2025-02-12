import express from "express";
import Testimonials from "../models/testimonial.model";
// import authenticate from "../middlewares/"

const router = express.Router();


// Create a new testimonial -> 
router.post("/create", async (req, res) => {
    try {
        const testimonial = new Testimonials(req.body);
        await testimonial.save();
        res.status(201).json({
            success: true, 
            message: "Testimonial created successfully",
            testimonial,
        })
    } catch (error) {
        res.status(400).json({
            success: false, 
            message: "Error creating testimonial", 
            error: error,
        })
        
    }
});


//


export default router;