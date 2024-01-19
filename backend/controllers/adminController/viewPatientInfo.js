import patientsModel from "../../models/schemas/Patients.js";

// reject registered doctor
export const viewPatientInfo = async (req, res) => {
    try {
        const selectedPatient_id = req.params._id; 
        const patient = await patientsModel.find({ _id: selectedPatient_id });
        if(!patient) {
            return res.status(404).json({ message: "No such patient" });
        }

        const data = {
            name: patient.name,
            email: patient.email,
            age: patient.age,
            gender: patient.gender,
            phoneNumber: patient.phoneNumber,
            emergencyContactFullName: patient.emergencyContact.fullName,
            emergencyContactPhoneNumber: patient.emergencyContact.phoneNumber,
            emergencyContactRelation: patient.emergencyContact.relation,
        }
        
        return res.status(200).json({ message: "Patient is found", data: data });
    } catch (error) {
        console.log("Error fetching patinet: " + error + "/n" + "Error.code: " + error.code);
        return res.status(500).json({ message: "Internal server error: " + error });
    }
};
