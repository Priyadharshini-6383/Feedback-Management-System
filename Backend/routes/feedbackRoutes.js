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

export default router;