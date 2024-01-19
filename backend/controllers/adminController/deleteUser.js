import usersModel from "../../models/schemas/Users.js";
import patientsModel from "../../models/schemas/Patients.js";
import doctorsModel from "../../models/schemas/Doctors.js";
import pharmacistsModel from "../../models/schemas/Pharmacists.js";

// delete user with username
export const deleteUser = async (req, res) => {
    try {
        const { username } = req.body;
        
        // search in users collections to find the user then delete it and get his refrenceId to delete him from his collection
        const userToBeDeleted = await usersModel.findOneAndDelete({ username: username});

        if(!userToBeDeleted) {
            return res.status(404).json({ message: "User not found." });
        }

        switch (userToBeDeleted.role) {
            case "Patient":
                await patientsModel.findOneAndDelete({ _id: userToBeDeleted.referenceId});
                break;
            case "Doctor":
                await doctorsModel.findOneAndDelete({ _id: userToBeDeleted.referenceId});
                break;
            case "Pharmacist":
                await pharmacistsModel.findOneAndDelete({ _id: userToBeDeleted.referenceId});
                break;
        }

        return res.status(200).json({ message: userToBeDeleted.role + " deleted successfully."});
    } catch (error) {
        console.log("Error deleting user: " + error + "/n" + "Error.code: " + error.code);
        return res.status(500).json({ message: "Internal server error: " + error });
    }
};
