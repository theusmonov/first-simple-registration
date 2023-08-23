import { Router } from "express";
import {USER_LOGIN, USER_POST } from "../controllers/user.controller.js";
import registermiddleware from "../middleware/registermiddleware.js";
import { schema } from "../validate/validate.js";
import { upload } from "../utils/multer.js";




const router = Router();

router.post("/register", upload.single("img"), registermiddleware(schema), USER_POST)
router.post("/login", USER_LOGIN)

export default (router);