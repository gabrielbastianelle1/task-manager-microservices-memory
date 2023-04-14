import { Request, Response } from "express";
import users from "../fakedb/datasabe";
import IUser from "../model/IUser";
import IResponse from "../model/IResponse";
import { find } from "../utils/user.utils";
import { v4 as uuidv4 } from "uuid";

export function findAllUsers(req: Request, res: Response) {
    res.status(200).json(users);
}

export function signin(req: Request, res: Response) {
    const { name } = req.body;

    const authentication = new Promise((resolve, reject) => {
        const user = find(users, name);
        if (user) {
            let response: IResponse<IUser>;

            response = {
                status: 200,
                msg: "success authentication",
                data: user
            };
            console.log(response);
            return resolve(response);
        }

        let response: IResponse<null>;

        response = {
            status: 400,
            msg: "failed authenticated",
            data: null
        };

        return reject(response);
    });

    authentication
        .then((response) => res.status(200).json(response))
        .catch((error) => res.status(400).json(error));
}

export function signup(req: Request, res: Response) {
    const { name } = req.body;

    const authentication = new Promise((resolve, reject) => {
        const user = find(users, name);
        if (user) {
            let response: IResponse<null> = {
                status: 400,
                msg: "name already taken",
                data: null
            };

            return reject(response);
        }

        let newUser: IUser = {
            id: uuidv4(),
            name: req.body.name
        };

        let response: IResponse<IUser> = {
            status: 200,
            msg: "success authentication",
            data: newUser
        };

        users.push(newUser);
        resolve(response);
    });

    authentication
        .then((response) => res.status(200).json(response))
        .catch((error) => res.status(400).json(error));
}
