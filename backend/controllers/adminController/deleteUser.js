import { connectToDatabase, closeDatabaseConnection } from "../../db.js";
import User from "../../objects/usersObjects/ObjectUser.js";

// delete user with username
export const deleteUser = async (req, res) => {
    try {
        // connect to the database
        const db = await connectToDatabase();
        const usersCollection = db.collection("Users");

        const { username } = req.body;
        
        // search in users collections to find the user then delete it and get his refrenceId to delete him from his collection
        const userToBeDeleted = await usersCollection.findOneAndDelete({ username: username});

        if(!userToBeDeleted) {
            return res.status(404).json({ message: "User not found." });
        }

        switch (userToBeDeleted.role) {
            case "Patient":
                const patientsCollection = db.collection("Patients");
                await patientsCollection.findOneAndDelete({ _id: userToBeDeleted.referenceId});
                break;
            case "Doctor":
                const doctorsCollection = db.collection("Doctors");
                await doctorsCollection.findOneAndDelete({ _id: userToBeDeleted.referenceId});
                break;
            case "Pharmacist":
                const pharmacistsCollection = db.collection("Pharmacists");
                await pharmacistsCollection.findOneAndDelete({ _id: userToBeDeleted.referenceId});
                break;
        }
        return res.status(200).json({ message: userToBeDeleted.role + " deleted successfully."});
    } catch (error) {
        console.error("Error adding admin:", error);
        return res.status(500).json({ message: "Internal server error: " + error });
    } finally {
        closeDatabaseConnection();
    }
};
