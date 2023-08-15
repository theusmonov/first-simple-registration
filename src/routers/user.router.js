import { Router } from "express";
import { USER_POST } from "../controllers/user.controller.js";


const router = Router();

router.post("/register", USER_POST)
router.post("/login")
router.get("/user")

export default (router);