import express from "express";
import { findAllUsers, signin, signup } from "../controller/user.controller";

const router = express.Router();

router.get("/", findAllUsers);
router.post("/signin", signin);
router.post("/signup", signup);

export default router;
