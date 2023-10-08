import express from "express"
import { register,login } from "../controllers/users.c.js";
const router=express.Router();
router.post("/regsister",register)
router.post("/login",login)
export default router;