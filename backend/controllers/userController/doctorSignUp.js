import { createUser } from "../createUser.js";
import doctorsModel from "../../models/schemas/Doctors.js";
import usersModel from "../../models/schemas/Users.js";

// doctor signup with username, password, name, email, dob, gender, phoneNumber, affiliation, educationBg 
export const doctorSignUp = async (req, res) => {
    try {
        const { username, password, name, email, dob, gender, phoneNumber, affiliation, educationBg } = req.body;
        
        const newUser = await createUser(username, password, "Doctor");
        const newDoctor = await doctorsModel.create({ name: name, email: email, dob: dob, gender: gender, phoneNumber: phoneNumber, affiliation: affiliation, educationBg: educationBg })

        await usersModel.findOneAndUpdate({ username: username }, { $set: { referenceId: newDoctor._id } }, { new: true });

        return res.status(201).json({ message: "Doctor added successfully" });
    } catch (error) {
        console.error("Error creating doctor:", error);
        return res.status(500).json({ message: "Internal server error: " + error });
    } finally {
        closeDatabaseConnection();
    }
};
