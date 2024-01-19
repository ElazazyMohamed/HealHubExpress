import { createUser } from "../createUser.js";
import { EmergencyContact } from "../../models/objects/patientObjects/EmergencyContact.js";
import patientsModel from "../../models/schemas/Patients.js";
import usersModel from "../../models/schemas/Users.js";

// patient sign up with username, password, name, email, dob, gender, phoneNumber, eCFullName, eCPhoneNumber, eCRelation
export const patientSignUp = async (req, res) => {
    try {
        const { username, password, name, email, dob, gender, phoneNumber, eCFullName, eCPhoneNumber, eCRelation } = req.body;

        const newUser = await createUser(username, password, "Patient");
        const newPatientEmergencyContact = new EmergencyContact(eCFullName, eCPhoneNumber, eCRelation);
        const newPatient = await patientsModel.create({ name: name, email: email, dob: dob, gender: gender, phoneNumber: phoneNumber, emergencyContact: newPatientEmergencyContact });

        await usersModel.findOneAndUpdate({ username: username }, { $set: { referenceId: newPatient._id } }, { new: true });

        return res.status(201).json({ message: "Patient added successfully" });
    } catch (error) {
        console.error("Error creating patient:", error);
        return res.status(500).json({ message: "Internal server error: " + error });
    }
};
