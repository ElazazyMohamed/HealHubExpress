import { clearToken } from "./helpers/clearToken.js";

// logout
export const logout = async (req, res) => {
    try {
        clearToken(res);
        return res.status(200).json({error : "Successfully Logged Out "});
    } catch (error) {
        console.error("Error logging out:", error);
        return res.status(500).json({ message: "Internal server error: " + error });
    }
};
