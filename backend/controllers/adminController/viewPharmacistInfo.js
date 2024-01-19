import pharmacistsModel from "../../models/schemas/Pharmacists.js";

// reject registered doctor
export const viewPatientInfo = async (req, res) => {
    try {
        const selectedPharmacist_id = req.params._id; 
        const pharmacist = await pharmacistsModel.find({ _id: selectedPharmacist_id });
        if(!pharmacist) {
            return res.status(404).json({ message: "No such pharmacist" });
        }
        return res.status(200).json({ message: "Pharmacist is found", data: pharmacist });
    } catch (error) {
        console.log("Error fetching pharmacist: " + error + "/n" + "Error.code: " + error.code);
        return res.status(500).json({ message: "Internal server error: " + error });
    }
};
