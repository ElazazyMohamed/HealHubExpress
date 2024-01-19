import { createUser } from "../createUser.js";

// add admin with username and password
export const addAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = await createUser(username, password, "Admin");

        return res.status(201).json({ message: "Admin added successfully" });
    } catch (error) {
        console.error("Error creating admin: error code: " + error.code, error);
        if(error.code === 11000) {
            console.log("2");
            return res.status(409).json({ message: "Username already exists"});
        }
        console.log("Error Adding admin: " + error + "/n" + "Error.code: " + error.code);
        return res.status(500).json({ message: "Internal server error: " + error });
    }
};
