import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default mongo;
