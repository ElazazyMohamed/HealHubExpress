import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
    type: {
        type: String,
        unique: true,
    }, 
    price: {
        type: Number,
    },
    clinicDiscount: {
        type: Number,
    },
    pharmacyDiscount: {
        type: Number,
    },
    familyDiscount: {
        type: Number,
    },
});

export default mongoose.model('Package',packageSchema);