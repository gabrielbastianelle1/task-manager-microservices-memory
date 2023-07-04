import { NextFunction, Request, Response } from "express";

const usernameRgx = /^(?=.*[a-zA-Z])[a-zA-Z0-9_]{3,16}$/;

export function validation(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;

    if (!usernameRgx.test(name)) {
        return res.status(400).json({
            msg: "invalid name"
        });
    }

    next();
}
