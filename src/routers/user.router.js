import { Router } from "express";
import { USER_POST } from "../controllers/user.controller.js";
import registermiddleware from "../middleware/registermiddleware.js";
import { schema } from "../validate/validate.js";



const router = Router();

router.post("/register", registermiddleware(schema), USER_POST)
router.post("/login")
router.get("/user")

export default (router);