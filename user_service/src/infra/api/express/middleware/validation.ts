import { NextFunction, Request, Response } from "express";

export default class Validation {
    private static usernameRgx: RegExp = /^(?=.*[a-zA-Z])[a-zA-Z0-9_]{3,16}$/;

    public static validation(req: Request, res: Response, next: NextFunction) {
        const { name } = req.body;

        if (!Validation.usernameRgx.test(name)) {
            return res.status(400).json({
                msg: "invalid name"
            });
        }

        next();
    }
}
