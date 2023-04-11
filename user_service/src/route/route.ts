import express from "express";
import { findAllUsers, signin, signup } from "../controller/user.controller";
import { validation } from "../middleware/validation";

const router = express.Router();

router.get("/", findAllUsers);
router.post("/signin", signin);
router.post("/signup", validation, signup);

export default router;
