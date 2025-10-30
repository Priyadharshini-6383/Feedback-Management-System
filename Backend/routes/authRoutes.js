import express from "express";
const router = express.Router();
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();


router.post("/register", async (req , res) => {
    const {name , email , password} = req.body;

    try {
        const checkExisting = await User.findOne({email})
        if(checkExisting) {
            return res.status(404).json({message: "Already Registered"});
        }

        const hashPassword = await bcrypt.hash(password , 10);

        const adminStatus = await User.findOne({role : "admin"})

        const role = adminStatus ? "user" : "admin"
        const user = new User ({name , email , password : hashPassword , role});
        await user.save();

        res.status(201).json({message : `Registered Successfully as ${role}`});

    } catch (error) {
        console.error ("Error Found");
    } 
})


router.post("/login" , async (req , res) => {
       const { email , password} = req.body;

       try {
        const user = await User.findOne({email});
        if(!user) {
            return res.status(404).json({message : "Invalid email"});
        } 
        const userMatched = await bcrypt.compare(password , user.password);
        if(!userMatched) {
            return res.status(404).json({message : "Invalid Password"})
        }

        const token = jsonwebtoken.sign(
            {user : user._id , role : user.role} ,
            process.env.JWT_SECRET,
            {expiresIn : "1h"},
        )

        res.json ({
            token ,
            role : user.role,
            user : {id : user._id , name : user.name , email : user.email},
        })



       }catch(error) {
console.error ("Error found" , error.message);
       }
})


export default router;