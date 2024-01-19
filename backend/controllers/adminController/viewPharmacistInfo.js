import pharmacistsModel from "../../models/schemas/Pharmacists.js";

// reject registered doctor
export const viewPatientInfo = async (req, res) => {
    try {
        const selectedPharmacist_id = req.params._id; 
        const pharmacist = await pharmacistsModel.find({ _id: selectedPharmacist_id });
        if(!pharmacist) {
            return res.status(404).json({ message: "No such pharmacist" });
        }

        const data = {
            name: pharmacist.name,
            email: pharmacist.email,
            age: pharmacist.age,
            gender: pharmacist.gender,
            phoneNumber: pharmacist.phoneNumber,
            affiliation: pharmacist.affiliation,
            educationBg:pharmacist.educationBg,
            status: pharmacist.status,
        }

        return res.status(200).json({ message: "Pharmacist is found", data: data });
    } catch (error) {
        console.log("Error fetching pharmacist: " + error + "/n" + "Error.code: " + error.code);
        return res.status(500).json({ message: "Internal server error: " + error });
    }
};
