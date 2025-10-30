import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import Database from "./config/db.js";
Database();




dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/auth" , authRoutes);
app.use("/api/feedback" , feedbackRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT , () => {
    console.log(`Server running in the PORT http://localhost:${PORT}`);
})
