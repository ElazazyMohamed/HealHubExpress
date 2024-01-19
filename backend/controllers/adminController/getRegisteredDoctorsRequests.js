import doctorsModel from "../../models/schemas/Doctors.js";

// get doctors registerd requests
export const getRegisteredDoctorsRequests = async (req, res) => {
    try {
        const registeredDoctors = await doctorsModel.find({ status: "Registered" });
        if(!registeredDoctors) {
            return res.status(404).json({ message: "No doctors are found" });
        }
        return res.status(200).json({ message: "Doctors are found", data: registeredDoctors });
    } catch (error) {
        console.log("Error getting registered doctors: " + error + "/n" + "Error.code: " + error.code);
        return res.status(500).json({ message: "Internal server error: " + error });
    }
};
