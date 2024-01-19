import { calculateAge } from "../helperFunctions/calculateAge.js";
import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    dob: {
        type: Date,
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
        enum: ["male", "female"],
    },
    phoneNumber: {
        type: String,
    },
    affiliation: {
        type: String,
    },
    educationBg: {
        type: String,
    },
    status: {
        type: String,
        enum: ["Registered", "Pending", "Accepted", "Rejected"],
        default: "Registered",
    },
    requiredDocuments: {
        type: Object,
        default: {},
    },
    employmentContract: {
        type: Object,
        default: {},
    },
    workingSlots: [
        {
            type: Object,
            default: {},
        },
    ],
    patients: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Patient'
        }
    ],
    appointments: [
        {
            type: Object,
            default: {},
        },
    ],
    chats: [
        {
            type: Object,
            default: {},
        },
    ],
});

// Pre-save middleware to calculate age before saving
doctorSchema.pre('save', function(next) {
    if (this.isNew || this.isModified('dob')) {
        this.age = calculateAge(this.dob);
    }
    next();
});

export default mongoose.model('Doctor',doctorSchema);