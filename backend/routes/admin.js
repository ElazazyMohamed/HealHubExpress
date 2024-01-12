import express from "express";

// Functions import
import { addAdmin } from "../controllers/adminController/addAdmin.js";
import { deleteUser } from "../controllers/adminController/deleteUser.js";

//router initialization
const router = express.Router();

// add admin with username and password
router.post("/addAdmin", addAdmin);

// delete user with username
router.delete("/deleteUser", deleteUser);

// Export router
export default router;
