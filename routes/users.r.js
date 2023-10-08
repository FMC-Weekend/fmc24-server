import express from "express"
import { register } from "../controllers/users.c.js";
const router=express.Router();

router.post("/regsister",register)
export default router;