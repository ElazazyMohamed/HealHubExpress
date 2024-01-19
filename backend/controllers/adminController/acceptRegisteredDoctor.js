import doctorsModel from "../../models/schemas/Doctors.js";

// accept registered doctor
export const acceptRegisteredDoctor = async (req, res) => {
    try {
        const registeredDoctor_id = req.params._id; 
        const doctor = await doctorsModel.find({ _id: registeredDoctor_id });
        if(!doctor) {
            return res.status(404).json({ message: "No such a doctor" });
        }
        doctor.status = "Accepted";
        await doctor.save();
        return res.status(200).json({ message: "Doctor is now accepted" });
    } catch (error) {
        console.log("Error accepting doctor: " + error + "/n" + "Error.code: " + error.code);
        return res.status(500).json({ message: "Internal server error: " + error });
    }
};
