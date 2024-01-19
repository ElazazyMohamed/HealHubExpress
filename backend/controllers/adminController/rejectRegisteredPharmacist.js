import pharmacistsModel from "../../models/schemas/Pharmacists.js";

// reject registered pharmacist
export const rejectRegisteredPharmacist = async (req, res) => {
    try {
        const registeredPharmacist_id = req.params._id; 
        const pharmacist = await pharmacistsModel.find({ _id: registeredPharmacist_id });
        if(!pharmacist) {
            return res.status(404).json({ message: "No such a pharmacist" });
        }
        pharmacist.status = "Rejected";
        await pharmacist.save();
        return res.status(200).json({ message: "Pharmacist is now rejected" });
    } catch (error) {
        console.log("Error rejected doctor: " + error + "/n" + "Error.code: " + error.code);
        return res.status(500).json({ message: "Internal server error: " + error });
    }
};
