import express from "express";
const router = express.Router();
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import User from "../models/User.js";


post("/register", async (req , res) => {
    const {name , email , password} = req.body;

    try {
        const checkExisting = await User.findOne({email})
        if(checkExisting) {
            return res.send(404).json({message: "Already Registered"});
        }

        const hashPassword = await bcrypt.hash(password , 10);
        const user = new User ({name , email , password : hashPassword});
        await user.save();

    } catch (error) {
        console.error ("Error Found");
    } 
})


