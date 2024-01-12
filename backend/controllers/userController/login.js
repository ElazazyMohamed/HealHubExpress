import { connectToDatabase, closeDatabaseConnection } from "../../db.js";
import { createToken } from "./helpers/createToken.js";

// login with username and password
export const login = async (req, res) => {
    try {
        // connect to the database
        const db = await connectToDatabase();
        const usersCollection = db.collection("Users");

        const { username, password } = req.body;

        const loggingUser =  await usersCollection.findOne({ username: username });

        if(!loggingUser) {
            return res.status(404).json({ message: "User does not exist" });
        }
        if(loggingUser.password !== password) {
            return res.status(401).json({ message: "Wrong password" });
        }

        tokenData = {
            username: loggingUser.username,
            id: loggingUser._id,
            role: loggingUser.role,
        }

        const token = createToken(tokenData);
        const maxAge = 3 * 24 * 60 * 60;
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge*1000,sameSite: "none", secure: true });
        res.set('Access-Control-Allow-Origin',req.headers.origin);
        res.set('Access-Control-Allow-Credentials','true');

        return res.status(200).json({ message: "Login successfully" });
    } catch (error) {
        console.error("Error logging:", error);
        return res.status(500).json({ message: "Internal server error: " + error });
    } finally {
        closeDatabaseConnection();
    }
};
