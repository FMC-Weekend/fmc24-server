import express from "express"
import { login } from "../controllers/users.c.js";
const router=express.Router();

router.post("/login",login)
export default router;