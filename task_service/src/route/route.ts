import express from "express";
import {
    findAllByUserId,
    findAllTasks,
    saveTask
} from "../controller/task-controller";
import taskValidation from "../middleware/validation";

const router = express.Router();

router.get("/", findAllTasks);
router.get("/find-all-by-userid/:id", findAllByUserId);
router.post("/save-task/:id", taskValidation, saveTask);

export default router;
