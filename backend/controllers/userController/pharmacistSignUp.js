import { createUser } from "../createUser.js";
import pharmacistsModel from "../../models/schemas/Pharmacists.js";
import usersModel from "../../models/schemas/Users.js";

// pharmacist signup with username, password, name, email, dob, gender, phoneNumber, hourlyRate, affiliation, educationBg
export const pharmacistSignUp = async (req, res) => {
    try {
        const { username, password, name, email, dob, gender, phoneNumber, affiliation, educationBg } = req.body;
        
        const newUser = await createUser(username, password, "Pharmacist");
        const newPharmacist = await pharmacistsModel.create({ name: name, email: email, dob: dob, gender: gender, phoneNumber: phoneNumber, affiliation: affiliation, educationBg: educationBg })

        await usersModel.findOneAndUpdate({ username: username }, { $set: { referenceId: newPharmacist._id } }, { new: true });

        return res.status(201).json({ message: "Pharmacist added successfully" });
    } catch (error) {
        console.error("Error creating pharmacist:", error);
        return res.status(500).json({ message: "Internal server error: " + error });
    } finally {
        closeDatabaseConnection();
    }
};
