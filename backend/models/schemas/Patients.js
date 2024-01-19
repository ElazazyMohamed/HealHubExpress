import { calculateAge } from "../helperFunctions/calculateAge.js";
import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
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
    emergencyContact: {
        type: Object,
    },
    wallet: {
        type: Number,
        default: 0
    },
    doctors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Doctor'
        }
    ],
    healthRecords: [
        {
            type: Object,
            default: {},
        },
    ],
    appointments: [
        {
            type: Object,
            default: {},
        },
    ],
    registeredFamilyMembers: [
        {
            type: Object,
            default: {},
        },
    ],
    unRegisteredFamilyMembers: [
        {
            type: Object,
            default: {},
        },
    ],
    prescriptions: [
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
patientSchema.pre('save', function(next) {
    if (this.isNew || this.isModified('dob')) {
        this.age = calculateAge(this.dob);
    }
    next();
});

export default mongoose.model('Patient',patientSchema);