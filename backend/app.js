import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import mongoose from 'mongoose';
import userRoutes from "./routes/user.js"
import adminRoutes from "./routes/admin.js"
import patientRoutes from "./routes/patient.js"
import doctorRoutes from "./routes/doctor.js"
import pharmacistRoutes from "./routes/pharmacist.js"

//initializations
dotenv.config();
const app = express();

// .env
const port = process.env.PORT || 4000;
const mongo = process.env.MONGO_URI;
export const secretJWT = process.env.JWT_SECRET;

//middleware
app.use(express.json());
app.use(cors({origin: 'http://localhost:'+port,credentials:true}));
app.use(cookieParser());

//routes
app.use("/api/user/", userRoutes);
app.use("/api/admin/", adminRoutes);
app.use("/api/patient/", patientRoutes);
app.use("/api/doctor/", doctorRoutes);
app.use("/api/pharmacist", pharmacistRoutes);

// Start the server and connect to mongodb
mongoose
  .connect(mongo)
  .then(() => {
    // listen for requests
    app.listen(port, () => console.log("Connected to MongoDB and Server is running on port "+ port));
  })
  .catch((error) => {
    console.log("Error connsecting to MongoDB, error code: " + error.code, error);
    mongoose.disconnect();
  });
