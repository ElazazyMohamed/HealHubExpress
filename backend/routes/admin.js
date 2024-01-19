import express from "express";
import { requireAuth } from "../Middleware/authMiddleware.js";

// Functions import
import { addAdmin } from "../controllers/adminController/addAdmin.js";
import { deleteUser } from "../controllers/adminController/deleteUser.js";

//router initialization
const router = express.Router();

// add admin with username and password
router.post("/addAdmin", requireAuth, addAdmin);

// delete user with username
router.delete("/deleteUser", requireAuth, deleteUser);

// Export router
export default router;
