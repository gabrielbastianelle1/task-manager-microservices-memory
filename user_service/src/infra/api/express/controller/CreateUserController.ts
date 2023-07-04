import { Request, Response } from "express";
import CreateUserUseCase from "../../../../application/user/use-case/CreateUserUseCase";
import User from "../../../../domain/user/entity/User";
import crypto from "crypto";

export default class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    execute(req: Request, res: Response) {
        console.log(this.createUserUseCase);
        this.createUserUseCase.execute(new User(crypto.randomUUID(), "test"));
    }
}
