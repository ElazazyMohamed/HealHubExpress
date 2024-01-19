import doctorsModel from "../../models/schemas/Doctors.js";

// get doctors
export const getDoctors = async (req, res) => {
    try {
        const doctors = await doctorsModel.find({ status: "Accepted" });
        if(!doctors) {
            return res.status(404).json({ message: "No doctors are found" });
        }
        return res.status(200).json({ message: "Doctors are found", data: doctors });
    } catch (error) {
        console.log("Error getting doctors: " + error + "/n" + "Error.code: " + error.code);
        return res.status(500).json({ message: "Internal server error: " + error });
    }
};
