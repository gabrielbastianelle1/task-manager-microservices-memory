import express from "express";
import {
    findAllByUserId,
    findAllTasks,
    saveTask
} from "../controller/task-controller";

const router = express.Router();

router.get("/", findAllTasks);
router.get("/find-all-by-userid/:id", findAllByUserId);
router.post("/save-task", saveTask);

export default router;
