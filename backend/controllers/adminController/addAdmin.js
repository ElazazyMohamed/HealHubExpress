import { connectToDatabase, closeDatabaseConnection } from "../../db.js";
import User from "../../objects/usersObjects/ObjectUser.js";

// add admin with username and password
export const addAdmin = async (req, res) => {
    try {
        // connect to the database
        const db = await connectToDatabase();
        const usersCollection = db.collection("Users");

        const { username, password } = req.body;

        const userObject = new User(username, password, "Admin", null);

        // Insert the user
        await usersCollection.insertOne(userObject);

        return res.status(201).json({ message: "Admin added successfully" });
    } catch (error) {
        console.error("Error adding admin:", error);
        return res.status(500).json({ message: "Internal server error: " + error });
    } finally {
        closeDatabaseConnection();
    }
};
