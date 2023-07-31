import express, { Request, Response } from "express";
import Signup from "../../../../application/user/use-case/Signup";
import Signin from "../../../../application/user/use-case/Signin";
import Database from "../../../repositosy/Database";
import UserRepositoryInterface from "../../../../application/user/resository/UserRepositoryInterface";
import { v4 as uuidv4 } from "uuid";
import Validation from "../middleware/validation";

const router = express.Router();

router.post("/signup", Validation.validation, (req: Request, res: Response) => {
    const userRepository: UserRepositoryInterface = new Database();
    const signup: Signup = new Signup(userRepository);
    try {
        signup.execute(req.body.name, uuidv4());
        res.status(201).json("created");
    } catch (error) {
        res.status(400).json(error.message);
    }
});

router.post("/signin", (req: Request, res: Response) => {
    const userRepository: UserRepositoryInterface = new Database();
    const signin: Signin = new Signin(userRepository);
    try {
        res.status(200).json(signin.execute(req.body.name));
    } catch (error) {
        res.status(400).json(error.message);
    }
});

router.get("/", (req: Request, res: Response) => {
    const userRepository: UserRepositoryInterface = new Database();
    res.json(userRepository.findAll());
});

export default router;
