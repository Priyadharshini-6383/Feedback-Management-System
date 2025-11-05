import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config() 

const Database = async ()=> {

     try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected Successfully");

    }catch(error) {
     console.error("Error Found" , error.message);
     process.exit(1);
    }

}

export default Database;
   