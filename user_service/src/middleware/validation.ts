import { Request, Response } from "express";

export function validation(req: Request, res: Response, next) {
    const { name } = req.body;

    if (name === undefined || name === "") {
        return res.status(400).json({
            msg: "invalid name"
        });
    }

    next();
}
