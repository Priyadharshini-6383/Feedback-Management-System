import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Database from "./config/db.js";
Database();




dotenv.config();


const app = express();
app.use(cors());



const PORT = process.env.PORT || 5000;
app.listen(PORT , () => {
    console.log(`Server running in the PORT http://localhost:${PORT}`);
})
