import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
    }, 
    ingredients: {
        type: String,
    },
    price: {
        type: Number,
    },
    quantity: {
        type: Number,
    },
    isArchived: {
        type: Boolean,
    },
    salesHistory: [
        {
            type: Object,
        },
    ],
    description: {
        type: String,
    },
    medicalUse: {
        type: String,
    },
    isPrescribed: {
        type: Boolean,
    },
    image: {
        type: String,
    },
});

export default mongoose.model('Medicine',medicineSchema);