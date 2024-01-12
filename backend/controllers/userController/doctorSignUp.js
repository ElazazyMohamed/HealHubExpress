import { connectToDatabase, closeDatabaseConnection } from "../../db.js";
import User from "../../objects/usersObjects/ObjectUser.js";
import Doctor from "../../objects/usersObjects/ObjectDoctor.js";

// doctor signup with username, password, name, email, dob, gender, phoneNumber, affiliation, educationBg 
export const doctorSignUp = async (req, res) => {
    try {
        // connect to the database
        const db = await connectToDatabase();
        const usersCollection = db.collection("Users");
        const doctorsCollection = db.collection("Doctors");

        const { username, password, name, email, dob, gender, phoneNumber, affiliation, educationBg } = req.body;
        
        const ObjectDoctor = new Doctor(name, email, dob, gender, phoneNumber, affiliation, educationBg);
        const databaseDoctor = await doctorsCollection.insertOne(ObjectDoctor);

        const userObject = new User(username, password, "Doctor", databaseDoctor.insertedId);
        await usersCollection.insertOne(userObject);

        return res.status(201).json({ message: "Doctor added successfully" });
    } catch (error) {
        console.error("Error adding doctor:", error);
        return res.status(500).json({ message: "Internal server error: " + error });
    } finally {
        closeDatabaseConnection();
    }
};
