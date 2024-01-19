import pharmacistsModel from "../../models/schemas/Pharmacists.js";

// get doctors
export const getPharmacists = async (req, res) => {
    try {
        const pharmacists = await pharmacistsModel.find({ status: "Accepted" });
        if(!pharmacists) {
            return res.status(404).json({ message: "No pharmacists are found" });
        }
        return res.status(200).json({ message: "Pharmacists are found", data: pharmacists });
    } catch (error) {
        console.log("Error getting pharmacists: " + error + "/n" + "Error.code: " + error.code);
        return res.status(500).json({ message: "Internal server error: " + error });
    }
};
