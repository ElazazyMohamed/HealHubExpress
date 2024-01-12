import { connectToDatabase, closeDatabaseConnection } from "../../db.js";
import User from "../../objects/usersObjects/ObjectUser.js";
import Pharmacist from "../../objects/usersObjects/ObjectPharmacist.js";

// pharmacist signup with username, password, name, email, dob, gender, phoneNumber, hourlyRate, affiliation, educationBg
export const pharmacistSignUp = async (req, res) => {
    try {
        // connect to the database
        const db = await connectToDatabase();
        const usersCollection = db.collection("Users");
        const pharmacistsCollection = db.collection("Pharmacists");

        const { username, password, name, email, dob, gender, phoneNumber, hourlyRate, affiliation, educationBg } = req.body;
        
        const ObjectPharmacist = new Pharmacist(name, email, dob, gender, phoneNumber, hourlyRate, affiliation, educationBg);
        const databasePharmacist = await pharmacistsCollection.insertOne(ObjectPharmacist);

        const userObject = new User(username, password, "Pharmacist", databasePharmacist.insertedId);
        await usersCollection.insertOne(userObject);

        return res.status(201).json({ message: "Pharmacist added successfully" });
    } catch (error) {
        console.error("Error adding pharmacist:", error);
        return res.status(500).json({ message: "Internal server error: " + error });
    } finally {
        closeDatabaseConnection();
    }
};
