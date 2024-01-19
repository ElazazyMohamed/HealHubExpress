import doctorsModel from "../../models/schemas/Doctors.js";

// reject registered doctor
export const viewPatientInfo = async (req, res) => {
    try {
        const selectedDoctor_id = req.params._id; 
        const doctor = await doctorsModel.find({ _id: selectedDoctor_id });
        if(!doctor) {
            return res.status(404).json({ message: "No such doctor" });
        }

        const data = {
            name: doctor.name,
            email: doctor.email,
            age: doctor.age,
            gender: doctor.gender,
            phoneNumber: doctor.phoneNumber,
            affiliation: doctor.affiliation,
            educationBg:doctor.educationBg,
            status: doctor.status,
        }

        return res.status(200).json({ message: "Doctor is found", data: data });
    } catch (error) {
        console.log("Error fetching doctor: " + error + "/n" + "Error.code: " + error.code);
        return res.status(500).json({ message: "Internal server error: " + error });
    }
};
