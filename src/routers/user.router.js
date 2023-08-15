import { Router } from "express";
import { USER_POST } from "../controllers/user.controller.js";
import { userCheck } from "../middleware/registermiddleware.js";


const router = Router();

router.post("/register", userCheck, USER_POST)
router.post("/login")
router.get("/user")

export default (router);