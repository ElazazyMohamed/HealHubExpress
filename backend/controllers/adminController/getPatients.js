import patientsModel from "../../models/schemas/Patients.js";

// get patients
export const getPatients = async (req, res) => {
    try {
        const patients = await patientsModel.find({});
        if(!patients) {
            return res.status(404).json({ message: "No patients are found" });
        }
        return res.status(200).json({ message: "Patients are found", data: patients });
    } catch (error) {
        console.log("Error getting patients: " + error + "/n" + "Error.code: " + error.code);
        return res.status(500).json({ message: "Internal server error: " + error });
    }
};
