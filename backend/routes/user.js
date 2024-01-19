import express from "express";
import { requireAuth } from "../Middleware/authMiddleware.js";

// Functions import
import { patientSignUp } from "../controllers/userController/patientSignUp.js";
import { doctorSignUp } from "../controllers/userController/doctorSignUp.js";
import { pharmacistSignUp } from "../controllers/userController/pharmacistSignUp.js";
import { login } from "../controllers/userController/login.js";
import { logout } from "../controllers/userController/logout.js";

//router initialization
const router = express.Router();

// patient sign up with username, password, name, email, dob, gender, phoneNumber, eCFullName, eCPhoneNumber, eCRelation
router.post("/patients/signup", patientSignUp);

// doctor signup with username, password, name, email, dob, gender, phoneNumber, affiliation, educationBg
router.post("/doctors/signup", doctorSignUp);

// pharmacist signup with username, password, name, email, dob, gender, phoneNumber, hourlyRate, affiliation, educationBg
router.post("/pharmacists/signup", pharmacistSignUp);

// login with username and password
router.post("/login", login);

// logout 
router.post("/logout", requireAuth, logout);

// Export router
export default router;
