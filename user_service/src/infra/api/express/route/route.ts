import express from "express";
import CreateUserController from "../controller/CreateUserController";
import CreateUserUseCase from "../../../../application/user/use-case/CreateUserUseCase";
import Database from "../../../repositosy/Database";

const router = express.Router();

const userRepository = new Database();
const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);

router.post("/create-user", createUserController.execute);

export default router;
