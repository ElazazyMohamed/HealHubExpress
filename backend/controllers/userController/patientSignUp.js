import { connectToDatabase, closeDatabaseConnection } from "../../db.js";
import User from "../../objects/usersObjects/ObjectUser.js";
import Patient from "../../objects/usersObjects/ObjectPatient.js";

// patient sign up with username, password, name, email, dob, gender, phoneNumber, eCFullName, eCPhoneNumber, eCRelation
export const patientSignUp = async (req, res) => {
    try {
        // connect to the database
        const db = await connectToDatabase();
        const usersCollection = db.collection("Users");
        const patientsCollection = db.collection("Patients");

        const { username, password, name, email, dob, gender, phoneNumber, eCFullName, eCPhoneNumber, eCRelation } = req.body;
        
        const ObjectPatient = new Patient(name, email, dob, gender, phoneNumber, eCFullName, eCPhoneNumber, eCRelation);
        const databasePatient = await patientsCollection.insertOne(ObjectPatient);

        const userObject = new User(username, password, "Patient", databasePatient.insertedId);
        await usersCollection.insertOne(userObject);

        return res.status(201).json({ message: "Patient added successfully" });
    } catch (error) {
        console.error("Error adding patient:", error);
        return res.status(500).json({ message: "Internal server error: " + error });
    } finally {
        closeDatabaseConnection();
    }
};
