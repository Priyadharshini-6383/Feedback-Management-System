import jsonwebtoken from "jsonwebtoken";
import express from "express";
import Feedback from "../models/Feedback.js"
import { verifyToken , verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();


router.post("/add" , verifyToken , async (req , res) => {
     const {name , email , message} = req.body;

     try {

        const newFeedback = new Feedback({
            userId : req.user.id,
             name,
      email,
            message,
        })

        await newFeedback.save();

        return res.status(200).json({message : "Feedback added successfully"});

     }catch(error) {

        console.error("Error Found" , error.message);

     }
})

router.get("/all" , verifyToken , verifyAdmin , async (req , res) => {
    try {
        const feedbacks  = await Feedback.find().sort({createdAt : -1});

        return res.status(200).json(feedbacks);
    }
    catch(error) {
        console.error("Error Found" , error.message);
    }
})

router.delete("/delete/:id" , verifyToken , verifyAdmin , async(req , res) => {
    try {
        await Feedback.findByIdAndDelete(req.params.id);
        return res.status(200).json({message : "Feedback deleted Successfully"});
    } catch (error) {
        console.error("Error Found" , error.message);
    }
})
export default router;