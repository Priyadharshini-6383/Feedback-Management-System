import jsonwebtoken from "jsonwebtoken";

export const verifyToken = (req , res , next) => {

    const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer")) {
            return res.status(404).json({message : "Token not available"});
        }

        const token = authHeader.split(" ")[1];
    try{

        const decoded = jsonwebtoken.verify(token , process.env.SECRET_KEY);

        req.user = decoded;
        next();


    }catch (error) {
console.error("Error Found" , error.message);
    }
}

export const  verifyAdmin = (req , res , next) => {

    if (req.user.role != "admin") {
        return res.status(404).json({message : "Access denied"});
    }
    next();
}