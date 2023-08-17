import { Router } from "express";
import { USER_POST } from "../controllers/user.controller.js";
import registermiddleware from "../middleware/registermiddleware.js";
import { schema } from "../validate/validate.js";
import { upload } from "../views/multer.js";



const router = Router();

router.post("/register", registermiddleware(schema), upload.single("img"),USER_POST)
router.post("/login")
router.get("/user")

export default (router);