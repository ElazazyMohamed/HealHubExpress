import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    }, 
    password: {
        type: String,
        validate: {
            validator: function(password) {
                // length check min: 8, max: 16
                const lengthCheck = password.length >=8 && password.length <= 16;

                // at least 1; Uppercase, lowercase, digit checks
                const uppercaseCheck = /[A-Z]/.test(password);
                const lowercaseCheck = /[a-z]/.test(password);
                const digitCheck = /\d/.test(password);

                // no spaces check
                const noSpacesCheck = !/\s/.test(password);

                // Create an array to store error messages
                const errorMessages = [];

                // Check each condition and push an error message for failed conditions
                if (!lengthCheck) {
                    errorMessages.push('Password must be between 8 and 16 characters.');
                }
                if (!uppercaseCheck) {
                    errorMessages.push('Password must contain at least one uppercase letter.');
                }
                if (!lowercaseCheck) {
                    errorMessages.push('Password must contain at least one lowercase letter.');
                }
                if (!digitCheck) {
                    errorMessages.push('Password must contain at least one digit.');
                }
                if (!noSpacesCheck) {
                    errorMessages.push('Password must not contain spaces.');
                }

                // Return false if any condition fails, and set the error message
                return errorMessages.length === 0 ? true : errorMessages;
            },
            message: 'Invalid password format',
        },
    },
    role: {
        type: String,
        enum: ["Admin", "Doctor", "Pharmacist", "Patient"],
    },
    refrenceId: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'role',
    },
});

export default mongoose.model('User',userSchema);