import pharmacistsModel from "../../models/schemas/Pharmacists.js";

// get pharmaicts registerd requests
export const getRegisteredPharmacistsRequests = async (req, res) => {
    try {
        const registeredPharmacists = await pharmacistsModel.find({ status: "Registered" });
        if(!registeredPharmacists) {
            return res.status(404).json({ message: "No pharmacist are found" });
        }
        return res.status(200).json({ message: "Pharmacist are found", data: registeredPharmacists });
    } catch (error) {
        console.log("Error getting registered pharmacists: " + error + "/n" + "Error.code: " + error.code);
        return res.status(500).json({ message: "Internal server error: " + error });
    }
};
