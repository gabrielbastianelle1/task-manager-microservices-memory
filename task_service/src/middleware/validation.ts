import { NextFunction, Request, Response } from "express";

export default function taskValidation(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { task } = req.body;

    if (task == undefined || task == null) {
        res.status(400).json({
            msg: "invalid task"
        });
    }

    next();
}
