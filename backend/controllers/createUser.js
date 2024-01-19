import userModel from "../models/schemas/Users.js";
import bcrypt from 'bcrypt';

// create new user with username, password, role, referenceId
export const createUser = async (username, password, role) => {
    try {
        // encrypt the password 
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        // create new user with given username, password and role but since we have not yet created any specific user we do not have refrenceId
        const newUser = await userModel.create({ username: username, password: hashedPassword, role: role, refrenceId: null});

        return newUser;
    } catch (error) {
        console.error("Error creating new user:", error);
        return error;
    }
};
